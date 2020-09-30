import React from 'react'
import { Row, Col } from 'reactstrap'
import AboutMeStyle from './AboutMe.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import Content from '../components/Content'

const AboutMe = () => (
  <StaticQuery
    query={graphql`
      query AboutMeQuery {
        file(relativePath: { eq: "fashion.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section className="section" style={{ marginTop: '1em' }}>
        <Row>
          <Col>
            <h2 className={AboutMeStyle.title}>About Me</h2>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 'auto' }} md="5" className={AboutMeStyle.img}>
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={AboutMeStyle.dh}
              alt="delaney higgins"
            />
          </Col>
          <Col
            sm={{ size: 'auto', offset: 0 }}
            md="7"
            className={AboutMeStyle.description}
          >
            <p className={AboutMeStyle.bio}>
              Hi, I’m Delaney. I Specialize in graphic & apparel design,
              photography, and visual merchandising. I've cultivated my skills
              with Anthropologie over the past three and a half years. You'll
              always find me surrounded by fresh flowers and music playing in
              the background (On tuesdays it's my dad's radio show!) Basically,
              I try to always surround myself with beautiful things and a lot of
              dogs.
            </p>
          </Col>
        </Row>
        {/* <div className="container">{<Content source={body} />}</div> */}
      </section>
    )}
  />
)

export default AboutMe
