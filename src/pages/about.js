import React from 'react'

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import * as S from '../components/Post/styled'
import SocialLinks from '../components/SocialLinks'

const PAGE_TITLE = "About me"

const AboutPage = () => (
  <Layout>
    <Seo title={PAGE_TITLE} />
    <S.PostWrapper>
      <S.PostTitle>{PAGE_TITLE}</S.PostTitle>
      <S.PostBody>
        <p>At age 12, I developed my first website, using notepad and seeking new knowledge in HTML, CSS and PHP to make dynamic and robust systems.</p>
        <p>At 19, I joined Codeby, when it was a small company with only 9 people, in a co-working that we should only go on pre-selected days.</p>
        <p>In the same year, I had the opportunity to participate in the Pizzahut and KFC Mexico project, in which I was able to put my knowledge of English and programming into practice, being responsible for the development of an integration with the objective of sending about 1 order per second, placed in e-commerce, for the store previously selected by the customer.</p>
        <p>In 2019, I did a face-to-face training for the Motorola team in India and, in parallel, I developed Motorola US e-commerce using React and Node.</p>
        <p>In 2020, I developed an integrator system for VTEX environments using Python, responsible for migrating hundreds of thousands of products and other data from 6 different malls to the current ONStores environment.</p>
        <p>In 2021, I was one of those responsible for tripling Codeby's revenue, in addition to helping it grow more than 200% in the same year, being today the current leader of Codeby's operations and development team, responsible for managing a team of more of 60 people.</p>
        <p>Every day, I try to get specialized with books focused on management and technology, in addition to participating in events with the aim of updating myself and discovering new paths to be followed.</p>
        <h2>Contact me on my social networks</h2>
        <SocialLinks />
      </S.PostBody>
    </S.PostWrapper>
  </Layout>
)

export default AboutPage