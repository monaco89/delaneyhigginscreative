import React from 'react'
import { graphql } from 'gatsby'
import HomeHero from '../components/HomeHero'
import AboutMe from '../components/AboutMe'
import SomeListThingy from '../components/SomeListThingy'
import Style from '../components/Style'
import InteriorDesign from '../components/InteriorDesign'
import InstagramFeed from '../components/InstagramFeed'
import Layout from '../components/Layout'
import Photography from '../../static/images/photography.jpeg'
import VisualMerch from '../../static/images/visual_merch.jpg'
import SewingAlts from '../../static/images/nick_apron.jpeg'
import GraphicDesign from '../../static/images/graphic_design.jpg'
import { Container, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <HomeHero large backgroundImage={featuredImage} />
    <AboutMe body={body} subtitle={subtitle} />
    <SomeListThingy />
    <Style />
    <InteriorDesign />
    <section className="section" style={{ marginTop: '1em' }}>
      <Row>
        <Col sm={{ size: 'auto', offset: 1 }} md="5" className="exp">
          <div>
            <a href="/photography">
              <img src={Photography} />
            </a>
            <h2 className="exp_title">Photography</h2>
            <p className="exp_blurp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
        <Col sm={{ size: 'auto', offset: 0 }} md="5" className="exp">
          <div>
            <a href="/visualmerchandising">
              <img src={VisualMerch} />
            </a>
            <h2 className="exp_title">Visual Merchandising</h2>
            <p className="exp_blurp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
      </Row>
      <Row style={{ marginTop: '125px' }}>
        <Col sm={{ size: 'auto', offset: 1 }} md="5" className="exp">
          <div>
            <a href="/graphicdesign">
              <img src={GraphicDesign} />
            </a>
            <h2 className="exp_title">Graphic Design</h2>
            <p className="exp_blurp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
        <Col sm={{ size: 'auto', offset: 0 }} md="5" className="exp">
          <div>
            <a href="/sewing">
              <img src={SewingAlts} />
            </a>
            <h2 className="exp_title">Sewing and Alterations</h2>
            <p className="exp_blurp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </Col>
      </Row>
    </section>
    <section className="section" style={{ marginTop: '80px' }}>
      <Row>
        <Col>
          <InstagramFeed count="4" />
        </Col>
      </Row>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <Container fluid={true}>
      <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
    </Container>
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
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
  }
`
