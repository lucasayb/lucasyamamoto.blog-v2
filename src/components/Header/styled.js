import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  align-items: center;
  background-color: var(--primary-background-color);
	transition: background-color var(--transition-time), color var(--transition-time);
  border-bottom: 1px solid var(--primary-border-color);
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 60px;
  z-index: 2;
`