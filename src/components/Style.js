import React from 'react'
import StyleImg from '../../static/images/style.jpeg'
import { Row, Col } from 'reactstrap'
import AboutMeStyle from './AboutMe.module.css'
// import Content from '../components/Content'

const Style = () => (
  <section className="section" style={{ marginTop: '1em' }}>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }} md="4">
        <img src={StyleImg} className={AboutMeStyle.dh} alt="delaney higgins" />
      </Col>
      <Col sm={{ size: 'auto', offset: 0 }} md="7">
        {/* // TODO Move h2 on picture */}
        <h2 className={AboutMeStyle.title}>Styling</h2>
        <div className={AboutMeStyle.bio}>Fashion is transformative. </div>
      </Col>
    </Row>
  </section>
)

export default Style
