import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import { Row, Col } from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const nodeURL = 'https://instagram.com/higginsdelaney/'

const InstagramFeed = () => (
  <StaticQuery
    query={graphql`
      query InstagramQuery {
        insta1: file(relativePath: { eq: "insta1.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        insta2: file(relativePath: { eq: "insta2.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        insta3: file(relativePath: { eq: "insta3.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        insta4: file(relativePath: { eq: "insta4.jpg" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <section className="section">
        <Row>
          <Col xs="6" md="2" className="insta">
            <a href={`${nodeURL}`} target="_blank" rel="noreferrer">
              {/* <Img
          loading="lazy"
          alt={''}
          fluid={
            'https://images.unsplash.com/photo-1592219641948-0f6332845ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
          }
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            maxHeight: '25rem'
          }}
        /> */}
              <Img
                fluid={data.insta1.childImageSharp.fluid}
                alt="instagram profile"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  maxHeight: '15rem'
                }}
              />
            </a>
          </Col>
          <Col xs="6" md="2" className="insta">
            <a href={`${nodeURL}`} target="_blank" rel="noreferrer">
              <Img
                fluid={data.insta2.childImageSharp.fluid}
                alt="instagram profile"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  maxHeight: '15rem'
                }}
              />
            </a>
          </Col>
          <Col xs="12" md="4">
            <h3 className="taCenter">
              <br />
              <a
                href="https://instagram.com/higginsdelaney"
                target="_blank"
                rel="noreferrer"
                className="followAlong"
              >
                Follow Along
              </a>
            </h3>
          </Col>
          <Col xs="6" md="2" className="insta">
            <a href={`${nodeURL}`} target="_blank" rel="noreferrer">
              <Img
                fluid={data.insta3.childImageSharp.fluid}
                alt="instagram profile"
                style={{
                  objectFit: 'cover',
                  width: '100%',
                  height: '100%',
                  maxHeight: '15rem'
                }}
              />
            </a>
          </Col>
          <Col xs="6" md="2" className="insta">
            <a href={`${nodeURL}`} target="_blank" rel="noreferrer">
              <Img
                fluid={data.insta4.childImageSharp.fluid}
                alt="instagram profile"
                style={{
                  objectFit: 'cover',

                  width: '100%',
                  height: '100%',
                  maxHeight: '15rem'
                }}
              />
            </a>
          </Col>
        </Row>
      </section>
    )}
  />
)

export default InstagramFeed
