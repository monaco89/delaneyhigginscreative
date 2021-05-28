import React from 'react';
import { Row, Col } from 'reactstrap';
import * as SectionStyle from '../style/fourColumnSection.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Styling = () => (
  <>
    <Row>
      <Col>
        <h2 className={SectionStyle.title}>styling</h2>
        <hr className={SectionStyle.line} />
      </Col>
    </Row>
    <section
      className={SectionStyle.section}
      // style={{ paddingLeft: '10vw', paddingRight: '10vw' }}
    >
      <Row>
        <Col xs="12" md="3" className={SectionStyle.link}>
          <a href="/interior">
            <Row className={SectionStyle.picture}>
              <StaticImage
                src="../images/interior.jpeg"
                alt="White nightstand"
                placeholder="blurred"
                transformOptions={{ fit: 'contain' }}
                backgroundColor="transparent"
              />
            </Row>
            <Row>
              <h2 className={SectionStyle.subTitle}>Interior</h2>
            </Row>
          </a>
        </Col>
        <Col xs="12" md="3" className={SectionStyle.link}>
          <a href="/prop">
            <Row className={SectionStyle.picture}>
              <StaticImage
                src="../images/prop.jpg"
                alt="Various accessories"
                placeholder="blurred"
                transformOptions={{ fit: 'contain' }}
                backgroundColor="transparent"
              />
            </Row>
            <Row>
              <h2 className={SectionStyle.subTitle}>Prop</h2>
            </Row>
          </a>
        </Col>
        <Col xs="12" md="3" className={SectionStyle.link}>
          <a href="/fashion">
            <Row className={SectionStyle.picture}>
              <StaticImage
                src="../images/fashion.jpeg"
                alt="Delaney with a hat"
                placeholder="blurred"
                transformOptions={{ fit: 'contain' }}
                backgroundColor="transparent"
              />
            </Row>
            <Row>
              <h2 className={SectionStyle.subTitle}>Fashion</h2>
            </Row>
          </a>
        </Col>
        <Col xs="12" md="3" className={SectionStyle.link}>
          <a href="/holiday">
            <Row className={SectionStyle.picture}>
              <StaticImage
                src="../images/holiday.jpg"
                alt="Wrapped Christmas presents"
                placeholder="blurred"
                transformOptions={{ fit: 'contain' }}
                backgroundColor="transparent"
              />
            </Row>
            <Row>
              <h2 className={SectionStyle.subTitle}>Holiday</h2>
            </Row>
          </a>
        </Col>
      </Row>
    </section>
  </>
);

export default Styling;
