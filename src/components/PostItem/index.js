import React from 'react';
import PropTypes from 'prop-types'
import * as S from './styled'

import Category from '../Category';

import getThemeColor from '../../utils/getThemeColor';

const PostItem = ({ slug, thumbnail, date, category, title, description }) => {
  return (
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>{date}</S.PostItemDate>
        <Category color={category.frontmatter.color} category={category.frontmatter.name} />
      </S.PostItemInfo>
      <S.PostItemLink 
        duration={0.6}
        fade
        bg={getThemeColor()}
        to={slug} 
        title={`Go to post ${title}`}
      >
        <S.PostItemTitle>{title}</S.PostItemTitle>
      </S.PostItemLink>
      <S.PostItemDescription>{description}</S.PostItemDescription>
      <S.PostItemLink 
        duration={0.6}
        cover
        direction="left"
        bg={getThemeColor()}
        to={slug} 
        title={`Go to post ${title}`}
      >
        {thumbnail ? <S.PostItemThumbnail fluid={thumbnail.childImageSharp.fluid} /> : <></>}
      </S.PostItemLink>
    </S.PostItemWrapper>
  )
}
PostItem.propTypes = {
  thumbnail: PropTypes.object,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem