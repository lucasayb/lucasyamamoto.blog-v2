import styled from 'styled-components'

import { Link } from 'gatsby'
import { Menu } from '@styled-icons/evaicons-solid/Menu'
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'

export const MenuBurgerWrapper = styled.button`
  align-items: center;
  background-color: var(--main-background-color);
  cursor: pointer;
  display: flex;
  width: 38px;
  height: 38px;
  border: 1px solid var(--main-border-color);
  border-radius: 5px;
  justify-content: center;
`

export const MenuBurgerIcon = styled(Menu)`
  color: var(--main-icon-color);
`

export const CloseIcon = styled(CloseOutline)`
  color: var(--main-icon-color);
`

export const SideDrawerWrapper = styled.aside`
  position: fixed;
  background: var(--main-background-color);
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

export const SideDrawerNavLink = styled(Link)`
  display: inline-block;
  font-size: 2.325rem;
  text-decoration: none;
  border-bottom: none;
  color: var(--main-text-color);
  &.active {
    color: var(--main-link-color);
    border-bottom: 1px dashed var(--main-border-color);
  }
`

export const SideDrawerSocialLinks = styled.section`
  border-top: 1px solid var(--main-border-color);
  align-items: center;
  display: flex;
  height: 10vh;
  justify-content: space-around;
`

export const SideDrawerSocialLinkItem = styled.a`
  color: var(--main-icon-color);
  text-decoration: none;
  border: none;
`

export const SideDrawerSocialLinkItemIconWrapper = styled.div`
  fill: var(--main-icon-color);
  width: 30px;
  height: 30px;
`