import { Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

export const PostItemWrapper = styled.section`
  padding: 15px;
`
export const PostItemTitle = styled.div`
  color: var(--secondary-text-color);
  font-size: 1.375rem;
  @media screen and (min-width: 800px) {
    font-size: 1.375rem;
  }
  line-height: 1.875rem;
  margin: 10px 0;
  &:hover {
    color: var(--main-link-color);
  }
`
export const PostItemTag = styled(Link)`
  align-items: center;
  background-color: ${(props) => props.color};
  border-bottom: none;
  color: var(--secondary-text-color);
  display: flex;
  font-size: 1rem;
  text-align: center;
  justify-content: center;
  height: 25px; 
  padding: 0 15px;
  font-weight: 100;
  text-decoration: none;
`
export const PostItemDate = styled.time`
  color: var(--secondary-text-color);
  font-size: 0.875rem;
  font-weight: 100;
`
export const PostItemInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const PostItemLink = styled(Link)`
  border-bottom: none;
  text-decoration: none;
`
export const PostItemThumbnail = styled(Img)`
  margin-top: 10px;
  width: 100%;
`
export const PostItemDescription = styled.p`
  color: var(--secondary-text-color);
  font-style: italic !important;
  line-height: 1.625rem;
`