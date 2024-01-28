import React from 'react';
import { graphql } from 'gatsby'

import Layout from "../components/Layout";
import Category from "../components/Category";
import Comments from "../components/Comments";
import Seo from "../components/Seo";
import * as S from '../components/Post/styled';
import getThemeColor from '../utils/getThemeColor';

const BlogPost = ({ data, pageContext }) => {
  const { markdownRemark } = data;
  const { frontmatter, fields, html } = markdownRemark;
  const { nextPost, previousPost, category } = pageContext;
  return (
    <Layout>
      <Seo
        title={frontmatter.title}
        description={frontmatter.description}
        image={frontmatter.thumbnail?.childImageSharp?.fluid?.src}
      />
      <S.PostWrapper>
        <S.PostTitle>{frontmatter.title}</S.PostTitle>
        <S.PostSocial9Wrapper>
          <div className="s9-widget-wrapper" />
        </S.PostSocial9Wrapper>
        <S.PostHeader>
          <S.PostDate>{frontmatter.date}</S.PostDate>
          {category?.frontmatter ?
            <Category color={category.frontmatter.color} category={category.frontmatter.name} />
            : <></>
          }
        </S.PostHeader>


        <S.PostDescription>{frontmatter.description}</S.PostDescription>
        {frontmatter.thumbnail ? <S.PostThumbnail fluid={frontmatter.thumbnail.childImageSharp.fluid} /> : <></>}

        <S.PostBody dangerouslySetInnerHTML={{ __html: html }} />
        <S.PostSocial9Wrapper>
          <div className="s9-widget-wrapper" />
        </S.PostSocial9Wrapper>
      </S.PostWrapper>
      <S.NavLinksWrapper>
        {previousPost ?
          <S.NavLink
            className="previous"
            duration={0.6}
            fade
            bg={getThemeColor()}
            to={previousPost.fields.slug}
          >
            {previousPost.frontmatter.title}
          </S.NavLink>
          : <></>
        }
        {nextPost ? (
          <S.NavLink
            className="next"
            duration={0.6}
            fade
            bg={getThemeColor()}
            to={nextPost.fields.slug}
          >
            {nextPost.frontmatter.title}
          </S.NavLink>
        ) : <></>}
      </S.NavLinksWrapper>
      <Comments url={fields.slug} title={frontmatter.title} />
    </Layout>
  )
}

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: {slug: { eq: $slug }}) {
      fields {
        slug
      }
      frontmatter {
        title
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
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