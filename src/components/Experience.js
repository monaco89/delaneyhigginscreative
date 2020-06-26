import React from 'react'
import Img from 'gatsby-image'
import { Row, Col } from 'reactstrap'
import { useStaticQuery, graphql } from 'gatsby'
import Styles from './Experience.module.css'

const ThreeColumnInfo = () => {
  const data = useStaticQuery(graphql`
    query ThreeColumnQuery {
      sewing: file(relativePath: { eq: "nick_apron.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      photography: file(relativePath: { eq: "photography.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      visualmerch: file(relativePath: { eq: "visual_merch.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="section" style={{ marginTop: '1em' }}>
      <Row>
        <Col sm={{ size: 'auto', offset: 0 }} md="4" className={Styles.exp}>
          <div>
            <Img
              fluid={data.photography.childImageSharp.fluid}
              alt="old white church"
              className={Styles.exp_img}
            />
            <h2 className={Styles.exp_title}>Photography</h2>
            <p className={Styles.exp_blurb}>
              Utilizing a Canon Rebel T7i to capture flat lays, product shots,
              and travel imagery.
            </p>
            <a href="/photography" className="Button-sm">
              More To See
            </a>
          </div>
        </Col>
        <Col sm={{ size: 'auto', offset: 0 }} md="4" className={Styles.exp}>
          <div>
            <Img
              fluid={data.visualmerch.childImageSharp.fluid}
              alt="stocked shelves"
              className={Styles.exp_img}
            />
            <h2 className={Styles.exp_title}>Visual Merchandising</h2>
            <p className={Styles.exp_blurb}>
              Expertly skilled in merchandising/styling on-figure apparel and
              in-home rooms.
            </p>
            <a href="/visualmerchandising" className="Button-sm">
              More To See
            </a>
          </div>
        </Col>
        <Col sm={{ size: 'auto', offset: 0 }} md="4" className={Styles.exp}>
          <div>
            <Img
              fluid={data.sewing.childImageSharp.fluid}
              alt="man wearing apron"
              className={Styles.exp_img}
            />
            <h2 className={Styles.exp_title}>Sewing and Alterations</h2>
            <p className={Styles.exp_blurb}>
              Have a basic alteration? I can help! I excel at transforming old,
              unwanted clothes into fresh garments. Plus, I design some of my
              own apparel, so I'm constantly perfecting my skills.
            </p>
            <a href="/sewing" className="Button-sm">
              More To See
            </a>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default ThreeColumnInfo
