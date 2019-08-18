import React from "react"
// import { Link } from "gatsby"

import Hero from '../components/hero';
import SEO from "../components/seo"
import '../sass/style.sass';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Hero />
  </>
)

export default IndexPage
