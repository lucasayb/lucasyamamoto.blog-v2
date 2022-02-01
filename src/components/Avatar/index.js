import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import Img from "gatsby-image"

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
  query {
    avatarImage: file(relativePath: { eq: "profile-picture.jpg" }) {
      childImageSharp {
        fixed(width: 41, height: 41) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
  `)
  return <Img fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar