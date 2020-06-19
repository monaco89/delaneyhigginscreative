import React from 'react'
import Img from 'gatsby-image'
import { Row, Col, Button } from 'reactstrap'
import { useStaticQuery, graphql } from 'gatsby'

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
      {/* // TODO: New component */}
      <Row>
        <Col sm={{ size: 'auto', offset: 0 }} md="4" className="exp">
          <div>
            <a href="/photography">
              <Img
                fluid={data.photography.childImageSharp.fluid}
                alt="old white church"
              />
            </a>
            <h2 className="exp_title">Photography</h2>
            <p className="exp_blurp">
              Utilizing a Canon Rebel T7i to capture flat lays, product shots,
              and travel imagery.
            </p>
            <Button outline color="secondary" href="/photography">
              More To See
            </Button>
          </div>
        </Col>
        <Col sm={{ size: 'auto', offset: 0 }} md="4" className="exp">
          <div>
            <Img
              fluid={data.visualmerch.childImageSharp.fluid}
              alt="stocked shelves"
            />
            <h2 className="exp_title">Visual Merchandising</h2>
            <p className="exp_blurp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button outline color="secondary" href="/visualmerchandising">
              More To See
            </Button>
          </div>
        </Col>
        <Col sm={{ size: 'auto', offset: 0 }} md="4" className="exp">
          <div>
            <a href="/sewing">
              <Img
                fluid={data.sewing.childImageSharp.fluid}
                alt="man wearing apron"
              />
            </a>
            <h2 className="exp_title">Sewing and Alterations</h2>
            <p className="exp_blurp">
              Have a basic alteration? I can help! I excel at transforming old,
              unwanted clothes into fresh garments. Plus, I design some of my
              own apparel, so I'm constantly perfecting my skills.
            </p>
            <Button outline color="secondary" href="/sewing">
              More To See
            </Button>
          </div>
        </Col>
      </Row>
    </section>
  )
}

export default ThreeColumnInfo
