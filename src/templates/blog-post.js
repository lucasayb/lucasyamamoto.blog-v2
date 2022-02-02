import React from 'react';
import { graphql } from 'gatsby'

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html }} />
    </>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
      frontmatter {
        title
      }
      html
    }
  }
`

export default BlogPost;