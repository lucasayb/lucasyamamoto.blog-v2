import React from 'react';
import { graphql } from 'gatsby'

import { PageTitle } from '../components/PageTitle/styled'
import { PageDescription } from '../components/PageDescription/styled'
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PostItem from '../components/PostItem';
import Pagination from '../components/Pagination';

const PAGE_TITLE = "Posts"
const PAGE_DESCRIPTION = "Originally, I intended to create a space where I could post only development-related tips or tutorials. However, now I use this space to post anything that I would like to share."

const BlogList = ({ data, ...props }) => {
  const postList = data.allMarkdownRemark.edges;

  const { allCategories, currentPage, numPages } = props.pageContext;
  
  const findCategory = (categoryName) => {
    try {
      const foundCategory = allCategories.find(category => {
        return category.frontmatter.name === categoryName
      })
      if (!foundCategory) {
        throw new Error(`Category ${categoryName} not found`)
      }
      return foundCategory
    } catch (error) {
      return {
        frontmatter: {
          
        }
      }
    }
  }

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = (currentPage - 1) === 1 ? '/' : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Layout>
      <Seo 
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      />
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <PageDescription>{PAGE_DESCRIPTION}</PageDescription>
      {postList.map(({
        node: {
          id,
          frontmatter: {
            category,
            title,
            thumbnail,
            description,
            date,
            color,
          },
          fields: {
            slug
          }
        }
      }) => (
        <PostItem
          key={id}
          date={date}
          title={title}
          thumbnail={thumbnail}
          category={findCategory(category)}
          slug={slug}
          description={description}
        />
      ))}
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Layout>
  )
}

export const query = graphql`
  query PostList($limit: Int!, $skip: Int!) {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(_posts)/.*\\.md$/"}}
      sort: {order: DESC, fields: frontmatter___date},
      limit: $limit,
      skip: $skip
    ) {
      edges {
        node {
          id
          frontmatter {
            category
            title
            description
            date(formatString: "DD [de] MMMM [de] YYYY", locale: "pt-BR")
            color
            thumbnail {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`

export default BlogList;