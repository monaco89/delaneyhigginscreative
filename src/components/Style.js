import React from 'react'
import Img from 'gatsby-image'
import { Row, Col, Button } from 'reactstrap'
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
          <Col sm={{ size: 'auto', offset: 1 }} md="4">
            <Img
              fluid={data.file.childImageSharp.fluid}
              className={AboutMeStyle.dh}
              alt="delaney higgins"
            />
          </Col>
          <Col sm={{ size: 'auto', offset: 0 }} md="7">
            <h2 className={AboutMeStyle.title}>Styling</h2>
            <div>
              <p className={AboutMeStyle.bio}>
                Fashion is transformative. It can give women the confidence they
                want and power they deserve. I love helping people become the
                best version of themselves, just by finding the right outfits.
              </p>
              <Button
                href="/style"
                color="secondary"
                size="lg"
                className={AboutMeStyle.button}
              >
                More To See
              </Button>
            </div>
          </Col>
        </Row>
      </section>
    )}
  />
)

export default Style
