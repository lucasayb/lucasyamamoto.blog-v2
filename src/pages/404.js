import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import sorryGIF from '../gifs/sorry.gif'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as S from '../components/NotFound/styled'
import getThemeColor from '../utils/getThemeColor';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Sorry :( Page not found" />
    <S.NotFoundWrapper>
      <S.SorryGifWrapper>
        <img src={sorryGIF} alt="Joey saying sorry" />
      </S.SorryGifWrapper>
      <S.TitleNotFound>404</S.TitleNotFound>
      <S.SubTitleNotFound>Sorry :( Page not found</S.SubTitleNotFound>
      <S.TextNotFound>The page you are looking for is nowhere to be found. Search to find what you want by clicking
        <AniLink 
          to="/search" 
          title="Go to search page" 
          duration={0.6}
          cover
          direction="top"
          bg={getThemeColor()}
        >
          here
        </AniLink>.
      </S.TextNotFound>
    </S.NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
