import * as React from "react"

import { useStaticQuery, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PostItem from '../components/PostItem';

const IndexPage = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query PostList {
      allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
        edges {
          node {
            frontmatter {
              category
              title
              description
              date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
              color
              categoryLink
            }
            fields {
              slug
            }
            timeToRead
          }
        }
      }
    }
  `)

  const postList = allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo title="Home" />
      {postList.map(({
        node: {
          frontmatter: {
            category,
            title,
            description,
            date,
            color,
            categoryLink
          },
          fields: {
            slug
          }
        }
      }) => (
        <PostItem
          date={date}
          title={title}
          category={category}
          categoryLink={categoryLink}
          color={color}
          slug={slug}
          description={description}
        />
      ))}
    </Layout>
  )
}

export default IndexPage
