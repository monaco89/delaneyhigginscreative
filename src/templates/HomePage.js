import React from 'react'
import { graphql } from 'gatsby'
import HomeHero from '../components/HomeHero'
import AboutMe from '../components/AboutMe'
import GraphicDesign from '../components/GraphicDesign'
import InstagramFeed from '../components/InstagramFeed'
import Layout from '../components/Layout'
import Photography from '../components/Photography'
import Styling from '../components/Styling'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const HomePageTemplate = ({ body }) => (
  <main className="Home">
    <HomeHero large />
    <Photography />
    <AboutMe body={body} />
    <Styling />
    <GraphicDesign />
    <InstagramFeed />
  </main>
)

const HomePage = ({ data: { page, file } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <Container fluid={true}>
      <HomePageTemplate {...page} {...file} body={page.html} />
    </Container>
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        featuredImage
      }
    }
  }
`
