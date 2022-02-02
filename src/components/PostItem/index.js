import React from 'react';
import PropTypes from 'prop-types'
import * as S from './styled'

const PostItem = ({ slug, color, date, category, categoryLink, title, description }) => (
  <S.PostItemWrapper>
    <S.PostItemInfo>
      <S.PostItemDate>{date}</S.PostItemDate>
      <S.PostItemTag to={categoryLink} color={color}>{category}</S.PostItemTag>
    </S.PostItemInfo>
    <S.PostItemLink to={slug}>
      <S.PostItemTitle>{title}</S.PostItemTitle>
    </S.PostItemLink>
    <S.PostItemDescription>{description}</S.PostItemDescription>
  </S.PostItemWrapper>
)

PostItem.propTypes = {
  slug: PropTypes.string.isRequired,
  categoryLink: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default PostItem