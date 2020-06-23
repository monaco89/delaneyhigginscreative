import React from 'react'
import { Row, Col } from 'reactstrap'
import AboutMeStyle from './AboutMe.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const InteriorDesign = () => (
  <StaticQuery
    query={graphql`
      query InteriorQuery {
        file(relativePath: { eq: "interior_design.jpeg" }) {
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
            <h2 className={AboutMeStyle.idTitle}>Interior Design</h2>
          </Col>
        </Row>
        <Row>
          <Col
            sm={{ size: 'auto', offset: 1 }}
            md="6"
            className={AboutMeStyle.description}
          >
            <p className={AboutMeStyle.idBio}>
              Whether I'm curating a high-end living space or adding the
              finishing touches with DIY art, I'm ready to work with every
              client from those looking for affordable decor to those outfitting
              their forever homes.
            </p>
            <button
              href="/interiordesign"
              className="Button"
              className={`Button ${AboutMeStyle.button}`}
            >
              More To See
            </button>
          </Col>
          <Col
            sm={{ size: 'auto', offset: 0 }}
            md="4"
            className={AboutMeStyle.img}
          >
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={AboutMeStyle.dh}
              alt="bed headboard"
            />
          </Col>
        </Row>
      </section>
    )}
  />
)

export default InteriorDesign
