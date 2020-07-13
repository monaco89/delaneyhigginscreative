import React from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'reactstrap'
import AboutMeStyle from './AboutMe.module.css'
import { StaticQuery, graphql } from 'gatsby'

const Style = () => (
  <StaticQuery
    query={graphql`
      query StyleQuery {
        file(relativePath: { eq: "style.jpeg" }) {
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
            <h2 className={AboutMeStyle.title}>Styling</h2>
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
              Fashion is transformative. It can give women the confidence they
              want and power they deserve. I love helping people become the best
              version of themselves, just by finding the right outfits.
            </p>
            <a href="/style" className={`Button ${AboutMeStyle.button}`}>
              More To See
            </a>
          </Col>
        </Row>
      </section>
    )}
  />
)

export default Style
