import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image"
import styled from 'styled-components'

export const AppleShortcutItemWrapper = styled.section`
  padding: 15px;
`
export const AppleShortcutItemTitle = styled.div`
  color: var(--primary-text-color);
  transition: color var(--transition-time);
  font-size: 1rem;
  line-height: 1.275rem;
  @media (min-width: 768px) {
    line-height: 1.625rem;
    font-size: 1.425rem;
  }
  margin: 10px 0;
`
export const AppleShortcutDetails = styled.div`
`

export const AppleShortcutRow = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 100px 1fr;
  gap: 15px;
`

export const AppleShortcutItemDate = styled.time`
  color: var(--primary-text-color);
  font-size: 0.875rem;
  font-weight: 100;
`
export const AppleShortcutItemInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const AppleShortcutItemicon = styled(Img)`
  margin-top: 10px;
  width: 100px;
`
export const AppleShortcutItemDescription = styled.p`
  color: var(--primary-text-color);
  
  line-height: 1.275rem;
  font-size: 0.7125rem;
  @media (min-width: 768px) {
    line-height: 1.625rem;
    font-size: 1rem;
  }
`

export const AppleShortcutItemLink = styled.a`
  font-size: 0.7125rem;
  line-height: 1.275rem;
  @media (min-width: 768px) {
    line-height: 1.625rem;
    font-size: 1rem;
  }
`