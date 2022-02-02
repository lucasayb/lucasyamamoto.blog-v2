import React from 'react';

import * as S from './styled'

const MenuBurger = () => {
  return (
    <S.MenuBurgerWrapper aria-label="Abrir menu">
      <S.MenuBurgerIcon />
      {/* <S.CloseIcon /> */}
    </S.MenuBurgerWrapper>
  )
}

export default MenuBurger;