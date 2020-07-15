import React from 'react'
import { graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import { Row, Col } from 'reactstrap'
import './ContactPage.css'
import Styles from './AboutMe.module.css'

// Export Template for use in CMS preview
export const AboutMePageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  aboutme1,
  aboutme2,
  aboutme3
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
            fluid={aboutme1.childImageSharp.fluid}
            alt="about me"
            className={Styles.exp}
          />
        </Col>
        <Col xs={{ size: '4', offset: 0 }} md="4" className={Styles.col}>
          <Img
            fluid={aboutme2.childImageSharp.fluid}
            alt="about me"
            className={Styles.exp}
          />
        </Col>

        <Col xs={{ size: '4', offset: 0 }} md="4" className={Styles.col}>
          <Img
            fluid={aboutme3.childImageSharp.fluid}
            alt="about me"
            className={Styles.exp}
          />
        </Col>
      </Row>
      <br />
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

const AboutMePage = ({ data: { page, aboutme1, aboutme2, aboutme3 } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <AboutMePageTemplate
      {...page.frontmatter}
      body={page.html}
      aboutme1={aboutme1}
      aboutme2={aboutme2}
      aboutme3={aboutme3}
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
    aboutme1: file(relativePath: { eq: "aboutme_1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutme2: file(relativePath: { eq: "aboutme_2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aboutme3: file(relativePath: { eq: "aboutme_3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
