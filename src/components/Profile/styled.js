import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";

export const ProfileWrapper = styled.section`
  margin: 0 5px;
  flex-grow: 1;
`

export const ProfileLink = styled(AniLink)`
  align-items: center;
  border-bottom: none;
  display: flex;
  text-decoration: none;
`

export const ProfileAvatar = styled.div`
  margin-right: 10px;
`

export const ProfileInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 42px;
`

export const ProfileAuthor = styled.h1`
  color: var(--primary-text-color);
  font-size: 0.8125rem;
  @media (min-width: 350px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
  }
  font-weight: 100 !important;
  text-decoration: none;
`

export const ProfilePosition = styled.h2`
  color: var(--primary-text-color);
  font-size: 0.75rem;
  @media (min-width: 350px) {
    font-size: 0.8125rem;
  }
  font-weight: 500 !important;
  text-decoration: none;
`