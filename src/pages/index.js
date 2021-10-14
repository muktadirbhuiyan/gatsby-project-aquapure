import * as React from "react"
import Clients from "../components/clients"
import Hero from "../components/hero"
import Hero2 from "../components/hero2"
import Layout from "../components/layout"
import Seo from "../components/seo"
import ShowCase from "../components/showcase"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Hero2 />
    <ShowCase />
    <Clients />
  </Layout>
)

export default IndexPage
