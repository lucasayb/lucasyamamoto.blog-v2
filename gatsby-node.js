const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

// Function to create slugs for markdown files
const createSlug = (node, getNode, actions) => {
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({ node, getNode, basePath: "pages" })
    actions.createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

const fetchPostsAndCategories = async (graphql) => {
  const result = await graphql(`
  {
    categories: allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(_categories)/.*\.md$/"}}
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          name
          date
          color
        }
      }
    }
    posts: allMarkdownRemark(
      sort: {order: DESC, fields: frontmatter___date}
      filter: {fileAbsolutePath: {regex: "/(_posts)/.*\.md$/"}}
    ) {
      edges {
        next {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        previous {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
        node {
          frontmatter {
            category
            title
            description
            date(formatString: "MMMM DD[,] YYYY", locale: "en-US")
            color
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }`)

  if (result.errors) {
    throw new Error("Error querying posts: ", result.errors)
  }

  const posts = result.data.posts.edges
  const categories = result.data.categories.nodes
  return [posts, categories]
}

// Function to process posts
const processPosts = async (createPage, posts, categories) => {
  posts.forEach(({ node, previous, next }) => {
    const foundCategory = categories.find(category => {
      return category.frontmatter.name === node.frontmatter.category
    })
    createPage({
      path: node.fields.slug,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        category: foundCategory,
        slug: node.fields.slug,
        previousPost: next,
        nextPost: previous
      }
    })
  })
}

const createAppleShortcutsPage = (createPage) => {
  createPage({
    path: '/apple-shortcuts',
    component: path.resolve('./src/templates/apple-shortcuts.js'),
  })
}

// Function to create paginated pages
const createPaginatedPages = (createPage, posts, categories) => {
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/` : `/page/${index + 1}`,
      component: path.resolve('./src/templates/blog-list.js'),
      context: {
        allCategories: categories,
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1
      }
    })
  })
}

// Gatsby's onCreateNode API
exports.onCreateNode = ({ node, getNode, actions }) => {
  createSlug(node, getNode, actions)
}

// Gatsby's createPages API
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const [posts, categories] = await fetchPostsAndCategories(graphql)
  try {
    await processPosts(createPage, posts, categories)
    createPaginatedPages(createPage, posts, categories)
    createAppleShortcutsPage(createPage)
  } catch (error) {
    console.error("Error creating pages: ", error)
  }
}