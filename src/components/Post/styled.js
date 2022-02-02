import styled from 'styled-components'
import Img from "gatsby-image"

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
  color: var(--primary-tag-text-color);
  display: flex;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  height: 25px; 
  padding: 0 15px;
  font-weight: 100;
  text-decoration: none;
`

export const PostDate = styled.time`
  color: var(--primary-text-color);
  font-size: 0.875rem;
  font-weight: 100;
`

export const PostDescription = styled.h2`
  color: var(--primary-text-color);
  font-style: italic !important;
  line-height: 1.625rem;
`

export const PostThumbnail = styled(Img)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
`

export const PostTitle = styled.h1`
  color: var(--primary-text-color);
  font-size: 2.625rem;
  @media screen and (min-width: 800px) {
    font-size: 2.625rem;
  }
  font-weight: 400;
  margin: 10px 0;
`

export const PostBody = styled.section`
  /** Set margin-bottom to maintain vertical rhythm */
  h1, h2, h3, h4, h5, h6, p, blockquote, pre, ul, ol, dl, figure, .highlight { margin-bottom: 15px; }
  color: var(--primary-text-color);
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
    color: var(--primary-text-color);
    border-collapse: collapse;
    border: 1px solid var(--primary-table-border-color);
  }

  table tr:nth-child(even) {
    background-color: var(--primary-table-nth-child-even-color);
  }

  table th,
  table td {
    padding: 10px 15px;
  }

  table th {
    background-color: var(--primary-table-nth-child-even-color);
    border: 1px solid var(--primary-table-border-color);
  }

  table td {
    border: 1px solid var(--primary-table-border-color);
  }

  h1,
  h2,
  h3 {
    margin-top: 30px;
  }

  h4,
  h5,
  h6 {
    margin-top: 15px;
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
    color: var(--primary-blockquote-text-color);
    border-left: 4px solid var(--primary-blockquote-border-color);
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
    border: 1px solid var(--primary-codeblock-border-color);
    color: var(--secondary-text-color);
    border-radius: 3px;
    background-color: var(--primary-codeblock-background-color);
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
    line-height: 2rem;
  }
  a {
    display: inline-block;
    text-decoration: none;
  }
  iframe {
    margin: 10px 0;
  }
`