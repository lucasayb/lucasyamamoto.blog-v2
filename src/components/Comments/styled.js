import styled from 'styled-components'

export const CommentsWrapper = styled.section`
  color: var(--primary-text-color) !important;
  margin: auto;
  padding: 15px;
`

export const CommentsBody = styled.section`
  background-color: #0a061c;
  border-radius: 10px;
	transition: background-color var(--transition-time), color var(--transition-time);
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