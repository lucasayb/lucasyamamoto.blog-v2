import * as React from "react"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

import { Link } from 'gatsby'

import * as S from '../components/NotFound/styled'

const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Página não encontrada :(" />
    <S.TitleNotFound>404</S.TitleNotFound>
    <S.SubTitleNotFound>Página não encontrada :(</S.SubTitleNotFound>
    <S.TextNotFound>A página que você buscou não pôde ser encontrada. Utilize minha excelente busca pra encontrar o que você desejada clicando <Link to="/search">aqui</Link></S.TextNotFound>
  </Layout>
)

export default NotFoundPage
