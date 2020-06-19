import React from 'react'
import StyleImg from '../../static/images/style.jpeg'
import { Row, Col, Button } from 'reactstrap'
import AboutMeStyle from './AboutMe.module.css'
// import Content from '../components/Content'

const Style = () => (
  <section className="section" style={{ marginTop: '1em' }}>
    <Row>
      <Col sm={{ size: 'auto', offset: 1 }} md="4">
        <img src={StyleImg} className={AboutMeStyle.dh} alt="delaney higgins" />
      </Col>
      <Col sm={{ size: 'auto', offset: 0 }} md="7">
        <h2 className={AboutMeStyle.title}>Styling</h2>
        <div>
          <p className={AboutMeStyle.bio}>
            Fashion is transformative. It can give women the confidence they
            want and power they deserve. I love helping people become the best
            version of themselves, just by finding the right outfits.
          </p>
          <Button
            href="/style"
            color="secondary"
            size="lg"
            className={AboutMeStyle.button}
          >
            More To See
          </Button>
        </div>
      </Col>
    </Row>
  </section>
)

export default Style
