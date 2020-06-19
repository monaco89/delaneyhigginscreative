import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import { Row, Col } from 'reactstrap'
import insta1 from '../../static/images/insta1.jpg'
import insta2 from '../../static/images/insta2.jpg'
import insta3 from '../../static/images/insta3.jpg'
import insta4 from '../../static/images/insta4.jpg'

const nodeURL = 'https://instagram.com/higginsdelaney/'

const InstagramFeed = () => (
  <section className="section" style={{ marginTop: '50px' }}>
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
          <img
            alt="instagram profile"
            src={insta1}
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
          <img
            alt="instagram profile"
            src={insta2}
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
          <img
            alt="instagram profile"
            src={insta3}
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
          <img
            alt="instagram profile"
            src={insta4}
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
)

export default InstagramFeed
