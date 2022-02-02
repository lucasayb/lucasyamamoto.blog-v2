const postsQuery = `{
  posts: allMarkdownRemark(
    sort: {order: DESC, fields: frontmatter___date}
  ) {
    edges {
      node {
        objectID: id
        frontmatter {
          category
          color
          title
          description
          date_timestamp: date
          date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
        }
        fields {
          slug
        }
        excerpt(pruneLength: 5000)
      }
    }
  }
}`

const flatten = arr => arr.map(({ node: { frontmatter, ...rest } }) => ({
  ...frontmatter,
  date_timestamp: parseInt((new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0)),
  ...rest
}))

const queries = [
  {
    query: postsQuery,
    transformer: ({ data }) => flatten(data.posts.edges), // optional
    indexName: 'Blog Posts', // overrides main index name, optional
    settings: {
      attributesToSnippet: [`excerpt:20`]
      // optional, any index settings
    },
  },
];


module.exports =queries;