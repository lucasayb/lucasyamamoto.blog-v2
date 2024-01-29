import React from 'react';
import { graphql } from 'gatsby'

import { PageTitle } from '../components/PageTitle/styled'
import { PageDescription } from '../components/PageDescription/styled'
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import AppleShortcutItem from '../components/AppleShortcutItem';

const PAGE_TITLE = "Apple Shortcuts"
const PAGE_DESCRIPTION = "I enjoy creating digital automations in my free time using Apple Shortcuts. Here are a few that I’ve made from scratch or based on others I found online."

const AppleShortcuts = ({ data }) => {
  const appleShortcutsList = data.allMarkdownRemark.edges;

  return (
    <Layout>
      <Seo
        title={PAGE_TITLE}
        description={PAGE_DESCRIPTION}
      />
      <PageTitle>{PAGE_TITLE}</PageTitle>
      <PageDescription>{PAGE_DESCRIPTION}</PageDescription>
      {appleShortcutsList.map(({
        node: {
          id,
          frontmatter: {
            title,
            date,
            description,
            link,
            icon,
          },
        }
      }) => (
        <AppleShortcutItem
          key={id}
          date={date}
          title={title}
          icon={icon}
          link={link}
          description={description}
        />
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(_appleshortcuts)/.*\\.md$/"}}
      sort: {order: DESC, fields: frontmatter___date},
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            description
            date(formatString: "MMMM[, ] Do [of] YYYY", locale: "en-US")
            link
            icon {
              childImageSharp {
                fluid(maxWidth: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default AppleShortcuts;