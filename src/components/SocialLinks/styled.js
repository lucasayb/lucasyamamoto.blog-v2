import styled from 'styled-components'

export const SocialLinksWrapper = styled.section`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-around;
`

export const SocialLinkItem = styled.a`
  color: var(--primary-icon-color);
  text-decoration: none;
  border: none;
`

export const SocialLinkItemIconWrapper = styled.div`
  fill: var(--primary-icon-color);
  width: 30px;
  height: 30px;
`