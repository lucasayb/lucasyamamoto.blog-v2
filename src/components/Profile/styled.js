import styled from 'styled-components';
import { Link } from 'gatsby'

export const ProfileWrapper = styled.section`
  margin: 0 5px;
  flex-grow: 1;
`

export const ProfileLink = styled(Link)`
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
  color: var(--main-text-color);
  font-size: 1.25rem;
  font-weight: 100 !important;
  text-decoration: none;
`

export const ProfilePosition = styled.h2`
  color: var(--main-text-color);
  font-size: 0.8125rem;
  font-weight: 500 !important;
  text-decoration: none;
`