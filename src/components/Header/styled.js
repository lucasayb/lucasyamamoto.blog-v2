import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  background-color: var(--primary-background-color);
  border-bottom: 1px solid var(--primary-border-color);
  padding: 10px;
  width: 100%;
  min-height: 60px;
  z-index: 2;
`

export const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`