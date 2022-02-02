import React from 'react';
import PropTypes from 'prop-types';
import { Disqus } from 'gatsby-plugin-disqus';
import * as S from './styled'

const Comments = ({ url, title }) => {
  const completeURL = `https://www.lucasyamamoto.com${url}`

  return (
    <S.CommentsWrapper>
      <S.CommentsTitle>Comentários</S.CommentsTitle>
      <S.CommentsBody>
      <Disqus
        config={{
          url: completeURL,
          identifier: completeURL,
          title: title,
        }}
      />
      </S.CommentsBody>
    </S.CommentsWrapper>
  )
}

Comments.propTypes = { url: PropTypes.string.isRequired, title: PropTypes.string.isRequired }

export default Comments;