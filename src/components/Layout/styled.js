import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`

export const LayoutWrapper = styled.div`
  background-color: var(--primary-background-color);
	transition: background-color var(--transition-time), color var(--transition-time);
`

export const LayoutMain = styled.main`
  background-color: var(--primary-background-color);
	transition: background-color var(--transition-time), color var(--transition-time);
  width: 100%;
`
