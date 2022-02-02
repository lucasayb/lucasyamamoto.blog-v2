import React from 'react'

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Search from "../components/Search"

const AboutPage = () => (
  <Layout>
    <Seo 
      title="Busca" 
    />
    <Search />
  </Layout>
)

export default AboutPage