import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import sorryGIF from '../gifs/sorry.gif'
import { Link } from 'gatsby'
import * as S from '../components/NotFound/styled'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Desculpa :( Página não encontrada" />
    <S.NotFoundWrapper>
      <S.SorryGifWrapper>
        <img src={sorryGIF} alt="Joey saying sorry" />
      </S.SorryGifWrapper>
      <S.TitleNotFound>404</S.TitleNotFound>
      <S.SubTitleNotFound>Desculpa :( Página não encontrada</S.SubTitleNotFound>
      <S.TextNotFound>A página que você buscou não pôde ser encontrada. Utilize minha excelente busca pra encontrar o que você desejada clicando <Link to="/search">aqui</Link></S.TextNotFound>
    </S.NotFoundWrapper>
  </Layout>
)

export default NotFoundPage
