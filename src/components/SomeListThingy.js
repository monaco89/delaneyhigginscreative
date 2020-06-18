import React from 'react'
import { Row, Col } from 'reactstrap'
import ThingyStyle from './SomeListThingy.module.css'
import Books from '../../static/images/books.jpeg'

const SomeListThingy = () => (
  <section className={ThingyStyle.section} style={{ marginTop: '1em' }}>
    <Row>
      <Col sm={{ size: 'auto', offset: 0 }} md="5">
        <div className={ThingyStyle.list}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </Col>
      <Col sm={{ size: 'auto', offset: 1 }} md="6">
        <img src={Books} className={ThingyStyle.img} alt="fashion books" />
      </Col>
    </Row>
    <div className="container">{/* <Content source={body} /> */}</div>
  </section>
)

export default SomeListThingy
