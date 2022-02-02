import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as S from '../components/Post/styled';

const BlogPost = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <Seo title={frontmatter.title} />
      <S.PostWrapper>
        <S.PostTitle>{frontmatter.title}</S.PostTitle>
        <S.PostHeader>
          <S.PostDate>{frontmatter.date}</S.PostDate>
          <S.PostTag color={frontmatter.color}>{frontmatter.category}</S.PostTag>
        </S.PostHeader>
        <S.PostBody dangerouslySetInnerHTML={{__html: html }} />
      </S.PostWrapper>
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
      frontmatter {
        title
        description
        color
        category
        date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
      }
      html
    }
  }
`

export default BlogPost;