import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { Row, Col } from 'reactstrap'
import Styles from '../style/AboutMe.module.css'

import '../style/ContactPage.css'

// Export Template for use in CMS preview
export const AboutMePageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  aboutMePic
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className="section Contact--Section1">
      <Row>
        <Col xs={{ size: '4', offset: 0 }} md="4" className={Styles.col}>
          <Img
            fluid={aboutMePic.childImageSharp.fluid}
            alt="about me"
          />
        </Col>
       <Col>
        <Content source={body} />
      </Col>
      </Row>
      <br />
    </section>
  </main>
)

const AboutMePage = ({ data: { page, aboutMePic } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <AboutMePageTemplate
      {...page.frontmatter}
      body={page.html}
      aboutMePic={aboutMePic}
    />
  </Layout>
)

export default AboutMePage

export const pageQuery = graphql`
  query AboutMePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
      }
    }
    aboutMePic: file(relativePath: { eq: "aboutme.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
