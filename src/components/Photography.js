import React from 'react'
import { Row, Col } from 'reactstrap'
import SectionStyle from './fourColumnSection.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Photography = () => (
  <StaticQuery
    query={graphql`
      query PhotographyHomeQuery {
        file(relativePath: { eq: "dh.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
  >
    {data => (
      <>
        <Row>
          <Col>
            <h2 className={SectionStyle.title}>Photography</h2>
            <hr className={SectionStyle.line} />
          </Col>
        </Row>
        <section className="section" style={{ paddingTop: '0' }}>
          <Row>
            <Col xs="12" md="3">
              <a href="/people" className={SectionStyle.link}>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className={SectionStyle.img}
                  alt="People"
                />
                <h2 className={SectionStyle.subTitle}>People</h2>
              </a>
            </Col>
            <Col xs="12" md="3">
              <a href="/treats" className={SectionStyle.link}>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className={SectionStyle.img}
                  alt="Treats"
                />
                <h2 className={SectionStyle.subTitle}>Treats</h2>
              </a>
            </Col>
            <Col xs="12" md="3">
              <a href="/places" className={SectionStyle.link}>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className={SectionStyle.img}
                  alt="Places"
                />
                <h2 className={SectionStyle.subTitle}>Places</h2>
              </a>
            </Col>
            <Col xs="12" md="3">
              <a href="/things" className={SectionStyle.link}>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className={SectionStyle.img}
                  alt="Things"
                />
                <h2 className={SectionStyle.subTitle}>Things</h2>
              </a>
            </Col>
          </Row>
        </section>
      </>
    )}
  </StaticQuery>
)

export default Photography
