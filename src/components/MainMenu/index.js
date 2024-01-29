import React from 'react'
import * as S from './styled'
const links = [
  {
    name: 'Posts',
    to: '/'
  },
  {
    name: 'Apple Shortcuts',
    to: '/apple-shortcuts'
  },
  {
    name: 'About',
    to: '/about'
  },
]

const MainMenu = () => {
  return (
    <S.MainMenu>
      {links.map((link) => (
        <S.MenuItem>
          <S.MenuLink to={link.to}>{link.name}</S.MenuLink>
        </S.MenuItem>
      ))}
    </S.MainMenu>
  )
}

export default MainMenu