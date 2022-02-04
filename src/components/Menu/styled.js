import styled from 'styled-components'

import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Menu } from '@styled-icons/evaicons-solid/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const MenuBurgerWrapper = styled.button`
  align-items: center;
  background-color: var(--primary-background-color);
	transition: background-color 0.5s;
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
  width: 24px;
  height: 24px;
`

export const CloseIcon = styled(CloseOutline)`
  color: var(--primary-icon-color);
  width: 24px;
  height: 24px;
`

export const SideDrawerWrapper = styled.aside`
  position: fixed;
  background: var(--primary-background-color);
	transition: background 0.5s;
  width: 100%;
  height: calc(100% - 60px);
  top: 60px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
`

export const SideDrawerNavWrapper = styled.nav`
  height: 90%;
`

export const SideDrawerNav = styled.nav`
  align-items: center;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const SideDrawerNavLink = styled(AniLink)`
  display: inline-block;
  font-size: 3.325rem;
  text-decoration: none;
  border-bottom: none;
  color: var(--primary-text-color);
  &.active {
    color: var(--primary-link-color);
    border-bottom: 1px dashed var(--primary-border-color);
  }
`

export const SideDrawerSocialLinksWrapper = styled.section`
  border-top: 1px solid var(--primary-border-color);
  height: 10%;
`

export const SideDrawerSocialLinks = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
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