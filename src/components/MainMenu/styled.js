import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const MainMenu = styled.menu`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0 -10px;
  padding: 0;
  flex-basis: 100%;
  flex-wrap: wrap;
  order: 4;
  @media (min-width: 590px) {
    flex-basis: auto;
    order: 0;
  }
`

export const MenuItem = styled.li`
  text-align: center;
  padding: 0 15px;
`

export const MenuLink = styled(AniLink)`
  text-align: center;
  text-transform: lowercase;
  display: block;
  text-decoration: none;
`