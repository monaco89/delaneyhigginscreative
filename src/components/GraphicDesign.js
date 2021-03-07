import React from 'react'
import { Row, Col } from 'reactstrap'
import * as GDStyle from '../style/GraphicDesign.module.css'
import { StaticImage } from 'gatsby-plugin-image'

const GraphicDesign = () => (
  <>
    <section className={GDStyle.section} style={{ marginTop: '1em' }}>
      <Row style={{ alignItems: 'center' }}>
        <Col sm="12" md="5">
          <div className={GDStyle.body}>
            <Row>
              <Col>
                <p>
                  My graphic design skills lend themselves to brands looking to
                  elevate their social, email, and site design. Additionally,
                  I'm proficient at Photoshop and Lightroom.
                </p>
              </Col>
            </Row>
          </div>
        </Col>
        <Col sm="12" md={{ size: '5', offset: '1' }}>
          <StaticImage
            src="../images/graphic_design.jpg"
            className={GDStyle.img}
            alt="Graphic art spelling 'stories'"
          />
        </Col>
      </Row>
    </section>
    <Row className={GDStyle.links}>
      <Col>
        <a href="/marketing">Marketing</a> |{' '}
        <a href="/socialmedia">Social Media</a>
      </Col>
    </Row>
  </>
)

export default GraphicDesign
