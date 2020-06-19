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

export const HomePageTemplate = ({
  // title,
  subtitle,
  // featuredImage,
  body,
  childImageSharp
}) => (
  <main className="Home">
    <HomeHero large backgroundImage={childImageSharp} />
    <AboutMe body={body} subtitle={subtitle} />
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
        subtitle
        featuredImage
      }
    }
    file: file(relativePath: { eq: "delaney_home.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
