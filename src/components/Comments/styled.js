import styled from 'styled-components'

export const CommentsWrapper = styled.section`
  color: var(--primary-text-color) !important;
  margin: auto;
  padding: 15px;
`

export const CommentsBody = styled.section`
  background-color: white;
	transition: background-color 0.5s;
  color: var(--primary-text-color) !important;
  padding: 15px;
  iframe[src*="ads-iframe"] {
    display: none;
  }
`


export const CommentsTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: bold;
  margin-bottom: 15px;
`