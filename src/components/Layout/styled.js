import styled from 'styled-components'

export const LayoutWrapper = styled.div`
  background-color: var(--primary-background-color);
	transition: background-color var(--transition-time), color var(--transition-time);
  width: 100%;
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
`

export const LayoutMain = styled.main`
  background-color: var(--primary-background-color);
	transition: background-color var(--transition-time), color var(--transition-time);
  margin-top: 75px;
  width: 100%;
`
