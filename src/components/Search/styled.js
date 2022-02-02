import styled from 'styled-components';
import { Link } from 'gatsby';
import { Search } from '@styled-icons/boxicons-regular/Search'

export const SearchIconWrapper = styled(Link)`
  align-items: center;
  background-color: var(--main-background-color);
  border: none;
  cursor: pointer;
  display: flex;
  width: 38px;
  height: 38px;
  justify-content: center;
  margin: 0 10px;
`

export const SearchIcon = styled(Search)`
  color: var(--main-icon-color);
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
    background-color: var(--main-background-color);
    border: none;
    border-bottom: 1px solid var(--main-border-color);
    font-size: 1.125rem;
    font-weight: 200;
    color: var(--main-text-color);
    padding: 5px 15px;
    width: 100%;
    margin-bottom: 10px;
    &::placeholder {
      color: var(--main-text-color);
    }
  }
  .ais-Stats-text {
    color: var(--main-text-color);
  }
  .ais-SearchBox-submit,
  .ais-SearchBox-reset, 
  ais-SearchBox-resetIcon {
    display: none;
  }
`