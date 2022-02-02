import styled from 'styled-components';

import { Search } from '@styled-icons/boxicons-regular/Search'

export const SearchIconWrapper = styled.button`
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
`