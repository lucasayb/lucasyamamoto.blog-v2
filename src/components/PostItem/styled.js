import { Link } from 'gatsby'
import Img from "gatsby-image"
import styled from 'styled-components'

export const PostItemWrapper = styled.section`
  padding: 15px;
`
export const PostItemTitle = styled.div`
  color: var(--secondary-text-color);
  font-size: 22px;
  font-weight: 400;
  line-height: 30px;
  margin: 10px 0;
  &:hover {
    color: var(--main-link-color);
  }
`
export const PostItemTag = styled(Link)`
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
export const PostItemDate = styled.time`
  color: var(--secondary-text-color);
  font-size: 14px;
  font-weight: 100;
`
export const PostItemInfo = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`
export const PostItemLink = styled(Link)`
  text-decoration: none;
`
export const PostItemThumbnail = styled(Img)`
  width: 100%;
`
export const PostItemDescription = styled.p`
  color: var(--secondary-text-color);
  font-size: 14px;
  line-height: 30px;
  margin-bottom: 10px;
`