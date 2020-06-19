import React from 'react'
import { graphql } from 'gatsby'
import HomeHero from '../components/HomeHero'
import AboutMe from '../components/AboutMe'
import SomeListThingy from '../components/SomeListThingy'
import Style from '../components/Style'
import InteriorDesign from '../components/InteriorDesign'
import InstagramFeed from '../components/InstagramFeed'
import Layout from '../components/Layout'
import { Container, Row, Col, Button } from 'reactstrap'
import Img from 'gatsby-image'
import 'bootstrap/dist/css/bootstrap.min.css'

export const HomePageTemplate = ({
  // title,
  subtitle,
  // featuredImage,
  body,
  childImageSharp,
  sewing,
  photography,
  visualmerch
}) => (
  <main className="Home">
    <HomeHero large backgroundImage={childImageSharp} />
    <AboutMe body={body} subtitle={subtitle} />
    <Style />
    <SomeListThingy />
    <InteriorDesign />
    <section className="section" style={{ marginTop: '1em' }}>
      {/* // TODO: New component */}
      <Row>
        <Col sm={{ size: 'auto', offset: 0 }} md="4" className="exp">
          <div>
            <a href="/photography">
              <Img
                fluid={photography.childImageSharp.fluid}
                alt="old white church"
              />
            </a>
            <h2 className="exp_title">Photography</h2>
            <p className="exp_blurp">
              Utilizing a Canon Rebel T7i to capture flat lays, product shots,
              and travel imagery.
            </p>
            <Button outline color="secondary" href="/photography">
              More To See
            </Button>
          </div>
        </Col>
        <Col sm={{ size: 'auto', offset: 0 }} md="4" className="exp">
          <div>
            <Img
              fluid={visualmerch.childImageSharp.fluid}
              alt="stocked shelves"
            />
            <h2 className="exp_title">Visual Merchandising</h2>
            <p className="exp_blurp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button outline color="secondary" href="/visualmerchandising">
              More To See
            </Button>
          </div>
        </Col>
        <Col sm={{ size: 'auto', offset: 0 }} md="4" className="exp">
          <div>
            <a href="/sewing">
              <Img
                fluid={sewing.childImageSharp.fluid}
                alt="man wearing apron"
              />
            </a>
            <h2 className="exp_title">Sewing and Alterations</h2>
            <p className="exp_blurp">
              Have a basic alteration? I can help! I excel at transforming old,
              unwanted clothes into fresh garments. Plus, I design some of my
              own apparel, so I'm constantly perfecting my skills.
            </p>
            <Button outline color="secondary" href="/sewing">
              More To See
            </Button>
          </div>
        </Col>
      </Row>
    </section>
    <section className="section" style={{ marginTop: '50px' }}>
      <InstagramFeed count="4" />
    </section>
  </main>
)

const HomePage = ({ data: { page, file, ...data } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <Container fluid={true}>
      <HomePageTemplate
        {...page}
        {...file}
        {...page.frontmatter}
        body={page.html}
        {...data}
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
    sewing: file(relativePath: { eq: "nick_apron.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    photography: file(relativePath: { eq: "photography.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    visualmerch: file(relativePath: { eq: "visual_merch.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
