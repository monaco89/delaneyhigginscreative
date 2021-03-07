import React from 'react'
import { Row, Col } from 'reactstrap'
import { StaticImage } from 'gatsby-plugin-image'

const nodeURL = 'https://instagram.com/higginsdelaney/'

const InstagramFeed = () => (
  <section className="section">
    <Row>
      <Col xs="6" md="2" className="insta">
        <a href={`${nodeURL}`} target="_blank" rel="noreferrer">
          <StaticImage
            alt="instagram profile"
            src="../images/insta1.jpg"
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
          <StaticImage
            alt="instagram profile"
            src="../images/insta2.jpg"
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
          <StaticImage
            alt="instagram profile"
            src="../images/insta3.jpg"
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
          <StaticImage
            alt="instagram profile"
            src="../images/insta4.jpg"
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
