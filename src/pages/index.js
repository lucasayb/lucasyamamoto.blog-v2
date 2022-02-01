import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from 'gatsby'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <ul>
      <li><Link to="/about">About</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
