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
          <Col sm={{ size: 'auto', offset: 1 }} md="4">
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={AboutMeStyle.dh}
              alt="delaney higgins"
            />
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} md="7">
            <h2 className={AboutMeStyle.title}>About Me</h2>
            <div className={AboutMeStyle.bio}>{subtitle}</div>
          </Col>
        </Row>
        {/* <div className="container">{<Content source={body} />}</div> */}
      </section>
    )}
  />
)

export default AboutMe
