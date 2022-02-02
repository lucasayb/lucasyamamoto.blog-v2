import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from '@reach/router';
import Icons from './Icons';
import * as S from './styled'

import { navLinks, socialLinks } from './content'

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

  if (!context.menuOpen) {
    return <></>
  }

  return (
    <S.SideDrawerWrapper>
      <S.SideDrawerNav>
        {navLinks.map((navLink, key) => (
          <S.SideDrawerNavLink 
            key={key} 
            to={navLink.path} 
            activeClassName="active" 
            onClick={context.closeMenu}
            title={navLink.name}
          >
            {navLink.name}
          </S.SideDrawerNavLink>
        ))}
      </S.SideDrawerNav>
      <S.SideDrawerSocialLinks>
        {socialLinks.map((socialLink, key) => {
          const Icon = Icons[socialLink.name];
          return (
            <S.SideDrawerSocialLinkItem 
              target="_blank" 
              title={socialLink.name} 
              href={socialLink.link}
              key={key}
              rel="noopener noreferrer"
            >
              <S.SideDrawerSocialLinkItemIconWrapper><Icon /></S.SideDrawerSocialLinkItemIconWrapper>
            </S.SideDrawerSocialLinkItem>
          )
        })}
      </S.SideDrawerSocialLinks>
    </S.SideDrawerWrapper>
  )
}


export default SideDrawer