/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import * as S from './styled'

import Header from '../Header'

import { MenuContextProvider } from '../Menu'

import { TransitionPortal } from "gatsby-plugin-transition-link";

import SideDrawer from '../Menu'

import GlobalStyles from '../../styles/global';

const Layout = ({ children }) => {
  return (
    <S.LayoutWrapper>
      <MenuContextProvider>
        <GlobalStyles />
        <TransitionPortal level="top">
          <Header />
          <SideDrawer />
        </TransitionPortal>
        <S.LayoutMain>{children}</S.LayoutMain>
      </MenuContextProvider>
    </S.LayoutWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
