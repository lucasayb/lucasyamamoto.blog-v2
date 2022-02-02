import styled from 'styled-components'

export const PostWrapper = styled.section`
  padding: 15px;
`

export const PostHeader = styled.section`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`

export const PostTag = styled.section`
  align-items: center;
  background-color: ${(props) => props.color};
  color: var(--secondary-text-color);
  display: flex;
  font-size: 16px;
  text-align: center;
  justify-content: center;
  height: 25px; 
  padding: 0 15px;
  font-weight: 100;
  text-decoration: none;
`

export const PostDate = styled.time`
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 100;
`

export const PostTitle = styled.h1`
  color: var(--secondary-text-color);
  font-size: 2.625rem;
  @media screen and (min-width: 800px) {
    font-size: 2.625rem;
  }
  font-weight: 400;
  line-height: 30px;
  margin: 10px 0;
`

export const PostBody = styled.section`
  /** Set margin-bottom to maintain vertical rhythm */
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, ul, ol, dl, figure, .highlight { margin-bottom: 15px; }
  color: var(--secondary-text-color);
  h1 {
    font-size: 2.625rem;
  }

  @media screen and (min-width: 800px) {
    h1 {
      font-size: 2.625rem;
    }
  }

  /** Tables */
  table {
    margin-bottom: 30px;
    width: 100%;
    text-align: left;
    color: #bbbbbb;
    border-collapse: collapse;
    border: 1px solid #404040;
  }

  table tr:nth-child(even) {
    background-color: #222222;
  }

  table th,
  table td {
    padding: 10px 15px;
  }

  table th {
    background-color: #323232;
    border: 1px solid #4e4e4e;
  }

  table td {
    border: 1px solid #404040;
  }

  h1,
  h2,
  h3 {
    margin-top: 60px;
  }

  h4,
  h5,
  h6 {
    margin-top: 30px;
  }

  h2 {
    font-size: 1.75rem;
  }

  @media screen and (min-width: 800px) {
    h2 {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 1.375rem;
  }

  @media screen and (min-width: 800px) {
    h3 {
      font-size: 1.625rem;
    }
  }

  h4 {
    font-size: 1.25rem;
  }

  h5 {
    font-size: 1.125rem;
  }

  h6 {
    font-size: 1.0625rem;
  }

  /** Blockquotes */
  blockquote {
    color: #bca7e5;
    border-left: 4px solid #404040;
    padding-left: 15px;
    font-size: 1.125rem;
    font-style: italic;
  }

  blockquote > :last-child {
    margin-bottom: 0;
  }

  blockquote i,
  blockquote em {
    font-style: normal;
  }

  /** Code formatting */
  pre,
  code {
    font-family: "Menlo", "Inconsolata", "Consolas", "Roboto Mono", "Ubuntu Mono",
      "Liberation Mono", "Courier New", monospace;
    font-size: 0.9375em;
    border: 1px solid #404040;
    border-radius: 3px;
    background-color: #212121;
  }

  code {
    padding: 1px 5px;
  }

  pre {
    padding: 8px 12px;
    overflow-x: auto;
  }

  pre > code {
    border: 0;
    padding-right: 0;
    padding-left: 0;
  }

  ul,
  ol {
    margin-left: 30px;
  }
  
  ul {
    list-style-type: square;
  }

  ol {
    list-style-type: decimal;
  }

  li > ul,
  li > ol {
    margin-bottom: 0;
  }
  p {
    line-height: 26px;
  }
`