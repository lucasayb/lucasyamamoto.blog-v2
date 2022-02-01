import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'

import * as S from './styled'

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
  return <S.AvatarWrapper fixed={avatarImage.childImageSharp.fixed} />
}

export default Avatar