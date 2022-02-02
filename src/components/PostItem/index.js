import React from 'react';
import PropTypes from 'prop-types'
import * as S from './styled'

import getThemeColor from '../../utils/getThemeColor';

const PostItem = ({ slug, thumbnail, color, date, category, title, description }) => {
  return (
    <S.PostItemWrapper>
      <S.PostItemInfo>
        <S.PostItemDate>{date}</S.PostItemDate>
        <S.PostItemTag color={color}>{category}</S.PostItemTag>
      </S.PostItemInfo>
      <S.PostItemLink 
        duration={0.6}
        cover
        direction="left"
        bg={getThemeColor()}
        to={slug} 
        title={`Ir para o post ${title}`}
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
        title={`Ir para o post ${title}`}
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
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem