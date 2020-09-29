import React from 'react'
import { Row, Col } from 'reactstrap'
import SectionStyle from './fourColumnSection.module.css'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Styling = () => (
  <StaticQuery
    query={graphql`
      query StylingHomeQuery {
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
            <h2 className={SectionStyle.title}>Styling</h2>
            <hr className={SectionStyle.line} />
          </Col>
        </Row>
        <section className="section" style={{ paddingTop: '0' }}>
          <Row>
            <Col xs="12" md="3">
              <a href="/interiordesign" className={SectionStyle.link}>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className={SectionStyle.img}
                  alt="Interior"
                />
                <h2 className={SectionStyle.subTitle}>Interior</h2>
              </a>
            </Col>
            <Col xs="12" md="3">
              <a href="/prop" className={SectionStyle.link}>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className={SectionStyle.img}
                  alt="Prop"
                />
                <h2 className={SectionStyle.subTitle}>Prop</h2>
              </a>
            </Col>
            <Col xs="12" md="3">
              <a href="/fashion" className={SectionStyle.link}>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className={SectionStyle.img}
                  alt="Fashion"
                />
                <h2 className={SectionStyle.subTitle}>Fashion</h2>
              </a>
            </Col>
            <Col xs="12" md="3">
              <a href="/tabletop" className={SectionStyle.link}>
                <Img
                  fluid={data.file.childImageSharp.fluid}
                  className={SectionStyle.img}
                  alt="Tabletop"
                />
                <h2 className={SectionStyle.subTitle}>Tabletop</h2>
              </a>
            </Col>
          </Row>
        </section>
      </>
    )}
  </StaticQuery>
)

export default Styling
