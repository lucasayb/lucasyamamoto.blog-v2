import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: var(--main-background-color);
  border-bottom: 1px solid var(--main-border-color);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  z-index: 100000000;
`