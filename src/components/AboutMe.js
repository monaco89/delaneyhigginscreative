import React from 'react'
import { Row, Col } from 'reactstrap'
import AboutMeStyle from './AboutMe.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import Content from '../components/Content'

const AboutMe = ({ subtitle }) => (
  <StaticQuery
    query={graphql`
      query AboutMeQuery {
        file(relativePath: { eq: "dh.jpg" }) {
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
          <Col
            sm={{ size: 'auto', offset: 1 }}
            md="4"
            className={AboutMeStyle.img}
          >
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
            <p className={AboutMeStyle.bio}>{subtitle}</p>
            <a href="/about" className={`Button ${AboutMeStyle.button}`}>
              More To Know
            </a>
          </Col>
        </Row>
        {/* <div className="container">{<Content source={body} />}</div> */}
      </section>
    )}
  />
)

export default AboutMe
