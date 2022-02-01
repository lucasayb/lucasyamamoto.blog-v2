import React from 'react';

import * as S from './styled'

import Profile from '../Profile'
import MenuBurger from '../MenuBurger'
import { SearchIcon } from '../Search'

const Header = () => (
  <S.HeaderWrapper>
    <Profile />
    <SearchIcon />
    <MenuBurger />
  </S.HeaderWrapper>
)

export default Header;