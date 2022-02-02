import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import sorryGIF from '../gifs/sorry.gif'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import * as S from '../components/NotFound/styled'
import getThemeColor from '../utils/getThemeColor';

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Desculpa :( Página não encontrada" />
    <S.NotFoundWrapper>
      <S.SorryGifWrapper>
        <img src={sorryGIF} alt="Joey saying sorry" />
      </S.SorryGifWrapper>
      <S.TitleNotFound>404</S.TitleNotFound>
      <S.SubTitleNotFound>Desculpa :( Página não encontrada</S.SubTitleNotFound>
      <S.TextNotFound>A página que você buscou não pôde ser encontrada. Utilize minha excelente busca da Algolia pra encontrar o que você deseja clicando <AniLink title="Ir para a busca" bg={getThemeColor()} duration={0.6} cover direction="top" to="/search">aqui</AniLink></S.TextNotFound>
    </S.NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
