import React from 'react'
import { Row, Col } from 'reactstrap'
import GDStyle from '../style/GraphicDesign.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const GraphicDesign = () => (
  <StaticQuery
    query={graphql`
      query GraphicDesignQuery {
        file(relativePath: { eq: "graphic_design.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data) => (
      <section className={GDStyle.section} style={{ marginTop: '1em' }}>
        <Row style={{ alignItems: 'center' }}>
          <Col sm={{ size: 'auto', offset: 0 }} md="5">
            <div className={GDStyle.body}>
              <Row>
                <Col>
                  <p>
                    My graphic design skills lend themselves to brands looking
                    to elevate their social, email, and site design.
                    Additionally, I'm proficient at Photoshop and Lightroom.
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }} md="6">
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={GDStyle.img}
              alt="Graphic art spelling 'stories'"
            />
          </Col>
        </Row>
        <Row className={GDStyle.links}>
          <Col>
            <a href="/marketing">Marketing</a> |{' '}
            <a href="/socialmedia">Social Media</a>
          </Col>
        </Row>
      </section>
    )}
  />
)

export default GraphicDesign
