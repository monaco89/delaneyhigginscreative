import React from 'react'
import { Row, Col } from 'reactstrap'
import ThingyStyle from './SomeListThingy.module.css'
import AboutMeStyle from './AboutMe.module.css'
import GraphicDesign from '../../static/images/graphic_design.jpg'

const SomeListThingy = () => (
  <section className={ThingyStyle.section} style={{ marginTop: '1em' }}>
    <Row>
      <Col sm={{ size: 'auto', offset: 0 }} md="5">
        <div className={ThingyStyle.list}>
          <h2 style={{ color: '#898888', fontSize: '3rem' }}>Graphic Design</h2>
          <p>
            My graphic design skills lend themselves to brands looking to
            elevate their social, email, and site design. Additionally, I'm
            proficient at Photoshop and Lightroom.
          </p>
        </div>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }} md="6">
        <img
          src={GraphicDesign}
          className={ThingyStyle.img}
          alt="fashion books"
        />
      </Col>
    </Row>
    {/* <div className="container"><Content source={body} /></div> */}
  </section>
)

export default SomeListThingy
