import React from 'react';

import * as S from './styled'

import Profile from '../Profile'
import SideDrawer, { MenuBurger } from '../Menu'
import { SearchIcon } from '../Search'
import DarkMode from '../DarkMode'

const Header = () => {

  return (
    <S.HeaderWrapper>
      <Profile />
      <DarkMode />
      <SearchIcon />
      <MenuBurger />
      <SideDrawer />
    </S.HeaderWrapper>
  )
}
export default Header;