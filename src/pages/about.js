import React from 'react'

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from 'gatsby'

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <ul>
      <li><Link to="/about">About</Link></li>
    </ul>
  </Layout>
)

export default AboutPage