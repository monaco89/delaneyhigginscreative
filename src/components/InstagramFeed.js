import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import Img from 'gatsby-image'
import { Row, Col } from 'reactstrap'

const nodeURL = 'https://www.instagram.com/higginsdelaney/'

const InstagramFeed = () => (
  <Row>
    <Col xs="12" md="2">
      <a href={`${nodeURL}}`} target="_blank" rel="noreferrer">
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
          src={
            'https://images.unsplash.com/photo-1592219641948-0f6332845ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
          }
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            maxHeight: '15rem'
          }}
        />
      </a>
    </Col>
    <Col xs="12" md="2">
      <a href={`${nodeURL}`} target="_blank" rel="noreferrer">
        <img
          alt="instagram profile"
          src={
            'https://images.unsplash.com/photo-1592219641948-0f6332845ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
          }
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
      <p
        style={{
          textAlign: 'center',
          fontSize: '3.5rem',
          padding: '15px',
          fontWeight: '100'
        }}
      >
        Follow Along
      </p>
      <h3 className="taCenter">
        <br />
        <a
          href="https://instagram.com/higginsdelaney"
          target="_blank"
          rel="noreferrer"
        >
          @higginsdelaney
        </a>
      </h3>
    </Col>
    <Col xs="12" md="2">
      <a href={`${nodeURL}`} target="_blank" rel="noreferrer">
        <img
          alt="instagram profile"
          src={
            'https://images.unsplash.com/photo-1592219641948-0f6332845ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
          }
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            maxHeight: '15rem'
          }}
        />
      </a>
    </Col>
    <Col xs="12" md="2">
      <a href={`${nodeURL}`} target="_blank" rel="noreferrer">
        <img
          alt="instagram profile"
          src={
            'https://images.unsplash.com/photo-1592219641948-0f6332845ae2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'
          }
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
)

export default InstagramFeed
