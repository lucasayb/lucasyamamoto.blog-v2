import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar'
import * as S from './styled'

const Profile = () => {
  const {
    site: {
      siteMetadata: {
        title,
        position,
      }
    }
  } = useStaticQuery(graphql`
    query SiteMetadata {
      site {
        siteMetadata {
          title
          position
        }
      }
    }
  `)
  return (
    <S.ProfileWrapper>
      <S.ProfileLink to="/">
        <S.ProfileAvatar>
          <Avatar />
        </S.ProfileAvatar>
        <S.ProfileInfo>
          <S.ProfileAuthor>
            {title}
          </S.ProfileAuthor>
          <S.ProfilePosition>
            {position}
          </S.ProfilePosition>
        </S.ProfileInfo>
      </S.ProfileLink>
    </S.ProfileWrapper>
  )
}

export default Profile;