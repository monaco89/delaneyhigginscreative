import React from 'react'
import { Row, Col } from 'reactstrap'
import SectionStyle from '../style/fourColumnSection.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Styling = () => (
  <StaticQuery
    query={graphql`
      query StylingHomeQuery {
        interior: file(relativePath: { eq: "interior.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        prop: file(relativePath: { eq: "prop.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        fashion: file(relativePath: { eq: "fashion.jpeg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        holiday: file(relativePath: { eq: "holiday.jpg" }) {
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
            <h2 className={SectionStyle.title}>Styling</h2>
            <hr className={SectionStyle.line} />
          </Col>
        </Row>
        <section
          className={SectionStyle.section}
          // style={{ paddingLeft: '10vw', paddingRight: '10vw' }}
        >
          <Row>
            <Col xs="12" md="3" className={SectionStyle.link}>
              <a href="/interior">
                <Row className={SectionStyle.picture}>
                  <Img
                    fluid={data.interior.childImageSharp.fluid}
                    className={SectionStyle.img}
                    alt="Interior"
                  />
                </Row>
                <Row>
                  <h2 className={SectionStyle.subTitle}>Interior</h2>
                </Row>
              </a>
            </Col>
            <Col xs="12" md="3" className={SectionStyle.link}>
              <a href="/prop">
                <Row className={SectionStyle.picture}>
                  <Img
                    fluid={data.prop.childImageSharp.fluid}
                    className={SectionStyle.img}
                    alt="Prop"
                  />
                </Row>
                <Row>
                  <h2 className={SectionStyle.subTitle}>Prop</h2>
                </Row>
              </a>
            </Col>
            <Col xs="12" md="3" className={SectionStyle.link}>
              <a href="/fashion">
                <Row className={SectionStyle.picture}>
                  <Img
                    fluid={data.fashion.childImageSharp.fluid}
                    className={SectionStyle.img}
                    alt="Fashion"
                  />
                </Row>
                <Row>
                  <h2 className={SectionStyle.subTitle}>Fashion</h2>
                </Row>
              </a>
            </Col>
            <Col xs="12" md="3" className={SectionStyle.link}>
              <a href="/holiday">
                <Row className={SectionStyle.picture}>
                  <Img
                    fluid={data.holiday.childImageSharp.fluid}
                    className={SectionStyle.img}
                    alt="Holiday"
                  />
                </Row>
                <Row>
                  <h2 className={SectionStyle.subTitle}>Holiday</h2>
                </Row>
              </a>
            </Col>
          </Row>
        </section>
      </>
    )}
  </StaticQuery>
)

export default Styling
