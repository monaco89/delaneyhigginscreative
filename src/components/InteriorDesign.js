import React from 'react'
import bed from '../../static/images/interior_design.jpeg'
import { Row, Col } from 'reactstrap'
import AboutMeStyle from './AboutMe.module.css'
// import Content from '../components/Content'

const InteriorDesign = () => (
  <section className="section" style={{ marginTop: '1em' }}>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }} md="6">
        {/* // TODO Move h2 on picture */}
        <h2 className={AboutMeStyle.idTitle}>Interior Design</h2>
        <div className={AboutMeStyle.bio}>Incorporating a mix....</div>
      </Col>
      <Col sm={{ size: 'auto', offset: 0 }} md="4">
        <img src={bed} className={AboutMeStyle.dh} alt="bed headboard" />
      </Col>
    </Row>
  </section>
)

export default InteriorDesign
