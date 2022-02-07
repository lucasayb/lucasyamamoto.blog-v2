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

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return graphql(`
  {
    allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
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
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
            color
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }`).then(result => {
    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({ node, previous, next }) => {
      createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/blog-post.js'),
        context: { 
          slug: node.fields.slug,
          previousPost: next,
          nextPost: previous 
        }
      })
    })

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        path: index === 0 ? `/` : `/page/${index + 1}`,
        component: path.resolve('./src/templates/blog-list.js'),
        context: {
          limit: postsPerPage,
          skip: index * postsPerPage,
          numPages,
          currentPage: index + 1
        }
      })
    })
  })
}