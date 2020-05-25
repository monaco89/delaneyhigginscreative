import React from 'react'
import DH from '../../static/images/dh.jpg'
import { Row, Col } from 'reactstrap'
import AboutMeStyle from './AboutMe.module.css'
// import Content from '../components/Content'

const AboutMe = ({ subtitle }) => (
  <section className="section" style={{ marginTop: '1em' }}>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }} md="4">
        <img src={DH} className={AboutMeStyle.dh} alt="delaney higgins" />
      </Col>
      <Col sm={{ size: 'auto', offset: 0 }} md="7">
        {/* // TODO Move h2 on picture */}
        <h2 className={AboutMeStyle.title}>About Me</h2>
        <div className={AboutMeStyle.bio}>{subtitle}</div>
      </Col>
    </Row>
    <div className="container">{/* <Content source={body} /> */}</div>
  </section>
)

export default AboutMe
