import React from 'react'
import { Row, Col } from 'reactstrap'
import * as AboutMeStyle from '../style/AboutMe.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
// import Content from '../components/Content'

const AboutMe = () => (
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
    render={(data) => (
      <section className={`${AboutMeStyle.homeSection} section`}>
        <Row>
          <Col>
            <h2 className={AboutMeStyle.title}>About Me</h2>
            <hr className={AboutMeStyle.line} />
          </Col>
        </Row>
        <section className={AboutMeStyle.section}>
          <Row style={{ alignItems: 'center' }}>
            <Col sm="12" md="5">
              <a href="/about">
                <Image
                  fluid={data.file.childImageSharp.fluid}
                  className={AboutMeStyle.dh}
                  alt="delaney higgins"
                />
              </a>
            </Col>
            <Col sm="12" md={{ size: '5', offset: '1' }}>
              <p className={AboutMeStyle.bio}>
                Delaney specializes in styling, photography, and graphic design.
                She has cultivated her skills with Anthropologie over the past
                three and a half years excelling in Visual Merchandising. She is
                currently conquering Interior Design at Anna Kemper Atelier.
                You'll always find her with a camera in her hand and music
                playing in the background (On tuesdays it's her dad's radio
                show!)
              </p>
            </Col>
          </Row>
        </section>
        {/* <div className="container">{<Content source={body} />}</div> */}
      </section>
    )}
  />
)

export default AboutMe
