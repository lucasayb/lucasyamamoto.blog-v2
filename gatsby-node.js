const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

// To add the slug field to each post
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  // Ensures we are processing only markdown files
  if (node.internal.type === "MarkdownRemark") {
    // Use `createFilePath` to turn markdown files in our `data/faqs` directory into `/faqs/slug`
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
    })

    // Creates new query'able field with name of 'slug'
    createNodeField({
      node,
      name: "slug",
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
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
  }`).then(async (result) => {
    const data = result.data
    const categories = data.categories.nodes
    const posts = data.posts.edges

    posts.forEach(({ node, previous, next }) => {
      const category = categories.find(category => {
        return category.frontmatter.name === node.frontmatter.category
      })
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: {
          category,
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous
        }
      })
    })

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    createPage({
      path: '/apple-shortcuts',
      component: path.resolve('./src/templates/apple-shortcuts.js'),
    })
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
  })
}