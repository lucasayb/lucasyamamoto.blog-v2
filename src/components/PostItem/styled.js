import AniLink from "gatsby-plugin-transition-link/AniLink";
import Img from "gatsby-image"
import styled from 'styled-components'

export const PostItemWrapper = styled.section`
  padding: 15px;
`
export const PostItemTitle = styled.div`
  color: var(--primary-text-color);
  transition: color 0.5s;
  font-size: 1.375rem;
  @media screen and (min-width: 800px) {
    font-size: 1.375rem;
  }
  line-height: 1.875rem;
  margin: 10px 0;
  &:hover {
    color: var(--primary-link-color);
  }
`
export const PostItemTag = styled.span`
  align-items: center;
  background-color: ${(props) => props.color};
  transition: background-color 0.5s;
  border-bottom: none;
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
export const PostItemDate = styled.time`
  color: var(--primary-text-color);
  font-size: 0.875rem;
  font-weight: 100;
`
export const PostItemInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const PostItemLink = styled(AniLink)`
  border-bottom: none;
  text-decoration: none;
`
export const PostItemThumbnail = styled(Img)`
  margin-top: 10px;
  width: 100%;
`
export const PostItemDescription = styled.p`
  color: var(--primary-text-color);
  font-style: italic !important;
  line-height: 1.625rem;
`