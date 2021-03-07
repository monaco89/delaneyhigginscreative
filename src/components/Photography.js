import React from 'react'
import { Row, Col } from 'reactstrap'
import * as SectionStyle from '../style/fourColumnSection.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Photography = () => (
  <StaticQuery
    query={graphql`
      query PhotographyHomeQuery {
        people: file(relativePath: { eq: "people.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        treats: file(relativePath: { eq: "treats.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        places: file(relativePath: { eq: "places.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        things: file(relativePath: { eq: "things.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
  >
    {(data) => (
      <>
        <Row>
          <Col>
            <h2 className={SectionStyle.title}>Photography</h2>
            <hr className={SectionStyle.line} />
          </Col>
        </Row>
        <section className={SectionStyle.section}>
          <Row>
            <Col xs="12" md="3" className={SectionStyle.link}>
              <a href="/people">
                <Row className={SectionStyle.picture}>
                  <Img
                    fluid={data.people.childImageSharp.fluid}
                    className={SectionStyle.img}
                    alt="People"
                  />
                </Row>
                <Row>
                  <h2 className={SectionStyle.subTitle}>People</h2>
                </Row>
              </a>
            </Col>
            <Col xs="12" md="3" className={SectionStyle.link}>
              <a href="/treats">
                <Row className={SectionStyle.picture}>
                  <Img
                    fluid={data.treats.childImageSharp.fluid}
                    className={SectionStyle.img}
                    alt="Treats"
                  />
                </Row>
                <Row>
                  <h2 className={SectionStyle.subTitle}>Treats</h2>
                </Row>
              </a>
            </Col>
            <Col xs="12" md="3" className={SectionStyle.link}>
              <a href="/places">
                <Row className={SectionStyle.picture}>
                  <Img
                    fluid={data.places.childImageSharp.fluid}
                    className={SectionStyle.img}
                    alt="Places"
                  />
                </Row>
                <Row>
                  <h2 className={SectionStyle.subTitle}>Places</h2>
                </Row>
              </a>
            </Col>
            <Col xs="12" md="3" className={SectionStyle.link}>
              <a href="/things">
                <Row className={SectionStyle.picture}>
                  <Img
                    fluid={data.things.childImageSharp.fluid}
                    className={SectionStyle.img}
                    alt="Things"
                  />
                </Row>
                <Row>
                  <h2 className={SectionStyle.subTitle}>Things</h2>
                </Row>
              </a>
            </Col>
          </Row>
        </section>
      </>
    )}
  </StaticQuery>
)

export default Photography
