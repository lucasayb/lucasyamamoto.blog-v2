import styled from 'styled-components';
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { Search } from '@styled-icons/boxicons-regular/Search'

export const SearchIconWrapper = styled(AniLink)`
  align-items: center;
  background-color: var(--primary-background-color);
	transition: background-color var(--transition-time);
  border: none;
  cursor: pointer;
  display: flex;
  width: 38px;
  height: 38px;
  justify-content: center;
  margin: 0 10px;
`

export const SearchIcon = styled(Search)`
  color: var(--primary-icon-color);
  width: 18px;
  height: 18px;
`

export const SearchInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchAlgoliaIcon = styled.div`
  filter: grayscale(1);
  opacity: 0.5;
`

export const SearchBoxWrapper = styled.section`
  justify-content: center;
  display: flex;
  flex-direction: column;
  height: 120px;
  .ais-SearchBox,
  .ais-Stats {
    padding: 0 15px;
  }
  .ais-SearchBox {
  }
  .ais-Stats {
    font-size: 0.75rem;
    font-weight: 100;
  }
  .ais-SearchBox-input {
    background-color: var(--primary-background-color);
	  transition: background-color var(--transition-time);
    border: none;
    border-bottom: 1px solid var(--primary-border-color);
    font-size: 1.125rem;
    font-weight: 200;
    color: var(--primary-text-color);
    padding: 5px 15px;
    width: 100%;
    margin-bottom: 10px;
    &::placeholder {
      color: var(--primary-text-color);
    }
  }
  .ais-Stats-text {
    color: var(--primary-text-color);
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset, 
  ais-SearchBox-resetIcon {
    display: none;
  }
`