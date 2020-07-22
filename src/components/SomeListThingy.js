import React from 'react'
import { Row, Col } from 'reactstrap'
import ThingyStyle from './SomeListThingy.module.css'
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
    render={data => (
      <section className={ThingyStyle.section} style={{ marginTop: '1em' }}>
        <Row>
          <Col sm={{ size: 'auto', offset: 0 }} md="5">
            <div className={ThingyStyle.list}>
              <p>
                My graphic design skills lend themselves to brands looking to
                elevate their social, email, and site design. Additionally, I'm
                proficient at Photoshop and Lightroom.
              </p>
              <a
                href="/graphicdesign"
                className={`Button ${ThingyStyle.button}`}
              >
                More To See
              </a>
            </div>
          </Col>
          <Col sm={{ size: 'auto', offset: 1 }} md="6">
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={ThingyStyle.img}
              alt="Graphic art spelling 'stories'"
            />
          </Col>
        </Row>
      </section>
    )}
  />
)

export default GraphicDesign
