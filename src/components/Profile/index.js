import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';
import Avatar from '../Avatar'
import * as S from './styled'
import getThemeColor from '../../utils/getThemeColor';

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
      <S.ProfileLink 
        duration={0.6}
        cover
        direction="right"
        bg={getThemeColor()}
        to="/"
      >
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