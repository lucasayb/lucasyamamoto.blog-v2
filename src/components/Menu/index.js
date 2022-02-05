import React, { useState, useEffect, useContext } from 'react';
import { CSSTransition } from 'react-transition-group';
import { useLocation } from '@reach/router';
import * as S from './styled'
import * as SLayout from '../Layout/styled'

import { navLinks } from './content'
import SocialLinks from '../SocialLinks'
import getThemeColor from '../../utils/getThemeColor';

export const MenuContext = React.createContext({});

export const MenuContextProvider = ({ children }) => {
  const props = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);

  const openMenu = () => {
    setMenuOpen(true)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  useEffect(() => {
    closeMenu()
  }, [props.pathname])

  const value = {
    menuOpen,
    openMenu,
    closeMenu
  }

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  )
}


export const MenuBurger = () => {
  const context = useContext(MenuContext)

  if (context.menuOpen) {
    return (
      <S.MenuBurgerWrapper onClick={context.closeMenu} aria-label="Fechar menu">
        <S.CloseIcon />
      </S.MenuBurgerWrapper>
    )
  }
  return (
    <S.MenuBurgerWrapper onClick={context.openMenu} aria-label="Abrir menu">
      <S.MenuBurgerIcon />
    </S.MenuBurgerWrapper>
  )
}


const SideDrawer = () => {
  const context = useContext(MenuContext)

  return (
    <S.MenuContextWrapper>
      <CSSTransition in={context.menuOpen} timeout={500} classNames="transition" unmountOnExit>
        <S.SideDrawerWrapper>
          <S.SideDrawerNavWrapper>
            <SLayout.LayoutWrapper>
              <S.SideDrawerNav>
                {navLinks.map((navLink, key) => (
                  <S.SideDrawerNavLink
                    cover
                    direction="left"
                    bg={getThemeColor()}
                    duration={0.6}
                    key={key}
                    to={navLink.path}
                    activeClassName="active"
                    title={navLink.name}
                  >
                    {navLink.name}
                  </S.SideDrawerNavLink>
                ))}
              </S.SideDrawerNav>
            </SLayout.LayoutWrapper>
          </S.SideDrawerNavWrapper>
          <S.SideDrawerSocialLinksWrapper>
            <SLayout.LayoutWrapper>
              <SocialLinks />
            </SLayout.LayoutWrapper>
          </S.SideDrawerSocialLinksWrapper>
        </S.SideDrawerWrapper>
      </CSSTransition>
    </S.MenuContextWrapper>
  )
}


export default SideDrawer