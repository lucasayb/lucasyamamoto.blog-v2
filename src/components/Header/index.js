import React from 'react';

import * as S from './styled'

import Profile from '../Profile'
import SideDrawer, { MenuBurger } from '../Menu'
import { SearchIcon } from '../Search'

const Header = () => (
  <S.HeaderWrapper>
    <Profile />
    <SearchIcon />
    <MenuBurger />
    <SideDrawer />
  </S.HeaderWrapper>
)

export default Header;