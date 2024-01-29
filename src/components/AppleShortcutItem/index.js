import React from 'react';
import PropTypes from 'prop-types'
import * as S from './styled'

const AppleShortcutItem = ({ link, icon, date, title, description }) => {
  return (
    <S.AppleShortcutItemWrapper>
      <S.AppleShortcutItemInfo>
        <S.AppleShortcutItemDate>{date}</S.AppleShortcutItemDate>
      </S.AppleShortcutItemInfo>
      <S.AppleShortcutRow>
        <S.AppleShortcutItemicon fluid={icon.childImageSharp.fluid} />
        <S.AppleShortcutDetails>
          <S.AppleShortcutItemTitle>{title}</S.AppleShortcutItemTitle>
          <S.AppleShortcutItemDescription>{description}</S.AppleShortcutItemDescription>
          <S.AppleShortcutItemLink target="_blank" href={link}>Click here to get it</S.AppleShortcutItemLink>
        </S.AppleShortcutDetails>
      </S.AppleShortcutRow>
    </S.AppleShortcutItemWrapper>
  )
}
AppleShortcutItem.propTypes = {
  icon: PropTypes.object,
  date: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  category: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default AppleShortcutItem