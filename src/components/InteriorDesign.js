import React from 'react'
import bed from '../../static/images/interior_design.jpeg'
import { Row, Col, Button } from 'reactstrap'
import AboutMeStyle from './AboutMe.module.css'
// import Content from '../components/Content'

const InteriorDesign = () => (
  <section className="section" style={{ marginTop: '1em' }}>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }} md="6">
        <h2 className={AboutMeStyle.idTitle}>Interior Design</h2>
        <div className={AboutMeStyle.idBio}>
          <p>
            Whether I'm curating a high-end living space or adding the finishing
            touches with DIY art, I'm ready to work with every client from those
            looking for affordable decor to those outfitting their forever
            homes.
          </p>
          <Button
            href="/interiordesign"
            color="secondary"
            size="lg"
            className={AboutMeStyle.button}
          >
            More To See
          </Button>
        </div>
      </Col>
      <Col sm={{ size: 'auto', offset: 0 }} md="4">
        <img src={bed} className={AboutMeStyle.dh} alt="bed headboard" />
      </Col>
    </Row>
  </section>
)

export default InteriorDesign
