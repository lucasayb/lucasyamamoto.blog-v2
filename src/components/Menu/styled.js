import styled from 'styled-components'

import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Menu } from '@styled-icons/evaicons-solid/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const MenuBurgerWrapper = styled.button`
  align-items: center;
  background-color: var(--primary-background-color);
  cursor: pointer;
  display: flex;
  width: 38px;
  height: 38px;
  border: 1px solid var(--primary-border-color);
  border-radius: 5px;
  justify-content: center;
`

export const MenuBurgerIcon = styled(Menu)`
  color: var(--primary-icon-color);
`

export const CloseIcon = styled(CloseOutline)`
  color: var(--primary-icon-color);
`

export const SideDrawerWrapper = styled.aside`
  position: fixed;
  background: var(--primary-background-color);
  width: 100%;
  height: 100vh;
  top: 60px;
  left: 0;
  z-index: 1;
`

export const SideDrawerNav = styled.nav`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: calc(90vh - 60px);
`

export const SideDrawerNavLink = styled(AniLink)`
  display: inline-block;
  font-size: 2.325rem;
  text-decoration: none;
  border-bottom: none;
  color: var(--primary-text-color);
  &.active {
    color: var(--primary-link-color);
    border-bottom: 1px dashed var(--primary-border-color);
  }
`

export const SideDrawerSocialLinks = styled.section`
  border-top: 1px solid var(--primary-border-color);
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: space-around;
`

export const SideDrawerSocialLinkItem = styled.a`
  color: var(--primary-icon-color);
  text-decoration: none;
  border: none;
`

export const SideDrawerSocialLinkItemIconWrapper = styled.div`
  fill: var(--primary-icon-color);
  width: 30px;
  height: 30px;
`