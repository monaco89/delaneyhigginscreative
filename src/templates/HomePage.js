import React from 'react'
import { graphql } from 'gatsby'
import HomeHero from '../components/HomeHero'
import AboutMe from '../components/AboutMe'
import SomeListThingy from '../components/SomeListThingy'
import Style from '../components/Style'
import InteriorDesign from '../components/InteriorDesign'
import InstagramFeed from '../components/InstagramFeed'
import Layout from '../components/Layout'
import Experience from '../components/Experience'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
// const HomeHero = lazy(() => import('../components/HomeHero'))
// const AboutMe = lazy(() => import('../components/AboutMe'))
// const SomeListThingy = lazy(() => import('../components/SomeListThingy'))
// const InteriorDesign = lazy(() => import('../components/InteriorDesign'))
// const InstagramFeed = lazy(() => import('../components/InstagramFeed'))
// const Style = lazy(() => import('../components/Style'))

export const HomePageTemplate = ({ body, childImageSharp }) => (
  <main className="Home">
    <HomeHero large backgroundImage={childImageSharp} />
    <AboutMe body={body} />
    <Style />
    <SomeListThingy />
    <InteriorDesign />
    <Experience />
    <InstagramFeed />
  </main>
)

const HomePage = ({ data: { page, file } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <Container fluid={true}>
      <HomePageTemplate
        {...page}
        {...file}
        {...page.frontmatter}
        body={page.html}
      />
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
    file: file(relativePath: { eq: "delaney_home.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid(maxWidth: 1200, quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
