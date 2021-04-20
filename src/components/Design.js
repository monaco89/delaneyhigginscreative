import React from 'react'
import { Row, Col } from 'reactstrap'
import * as Style from '../style/Design.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const Design = () => (
  <section className={Style.section} style={{ marginTop: '1em' }}>
    <Row>
      <Col sm="12" md="6">
        <a href="/graphicdesign">
          <StaticImage
            src="../images/graphic_design.jpg"
            alt="Graphic design"
          />
        </a>
      </Col>
      <Col sm="12" md="6">
        <a href="/interiordesign">
          <StaticImage
            src="../images/interior_design.jpg"
            alt="Interior design"
          />
        </a>
      </Col>
    </Row>
  </section>
)

export default Design
