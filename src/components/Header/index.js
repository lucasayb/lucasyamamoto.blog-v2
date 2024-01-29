import React from 'react';

import * as S from './styled'
import { Container } from '../Layout/styled'

import Profile from '../Profile'
import MainMenu from '../MainMenu';
// import { MenuBurger } from '../Menu'

import { SearchIcon } from '../Search'
import DarkMode from '../DarkMode'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <Container>
        <S.HeaderContainer>
          <Profile />
          <MainMenu />
          <SearchIcon />
          <DarkMode />
        </S.HeaderContainer>
      </Container>
    </S.HeaderWrapper>
  )
}
export default Header;