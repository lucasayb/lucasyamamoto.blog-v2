import React from 'react'

import Layout from "../components/Layout"
import Seo from "../components/seo"
import * as S from '../components/Post/styled'

const AboutPage = () => (
  <Layout>
    <Seo title="Sobre" />
    <S.PostTitle>Sobre mim</S.PostTitle>
    <S.PostBody>
      <p>Aos 12 anos desenvolvi meu primeiro site, usando bloco de notas e buscando novos conhecimentos em HTML, CSS e PHP para fazer sistemas dinâmicos e robustos.</p>
      <p>Aos 19, entrei na Codeby, quando era uma pequena empresa com apenas 9 pessoas, em um co-working que só deveríamos ir em dias pré-selecionados.</p>
      <p>No mesmo ano, tive a oportunidade de participar do projeto do Pizzahut e do KFC México, no qual pude colocar em prática meus conhecimentos de inglês e programação, sendo responsável pelo desenvolvimento de uma integração com o objetivo de enviar cerca de 1 pedido por segundo, colocado em e-commerce, para a loja previamente selecionada pelo cliente.</p>
      <p>Em 2019, fiz um treinamento presencial para a equipe da Motorola na Índia e, paralelamente, desenvolvi o e-commerce da Motorola nos EUA usando React e Node.</p>
      <p>Em 2020, desenvolvi um sistema integrador para ambientes VTEX utilizando Python, responsável por migrar centenas de milhares de produtos e outros dados de 6 shoppings diferentes para o ambiente atual da ONStores.</p>
      <p>Em 2021, fui um dos responsáveis ​​por triplicar a receita da Codeby, além de ajudá-la a crescer mais de 200% no mesmo ano, sendo hoje o atual líder da equipe de operações e desenvolvimento da Codeby, responsável pela gestão de uma equipe de mais de 60 pessoas.</p>
      <p>A cada dia procuro me especializar com livros voltados para gestão e tecnologia, além de participar de eventos com o objetivo de me atualizar e descobrir novos caminhos a serem seguidos.</p>
    </S.PostBody>
  </Layout>
)

export default AboutPage