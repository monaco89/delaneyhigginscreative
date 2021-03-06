import React from 'react';
import { Row, Col } from 'reactstrap';
import * as SectionStyle from '../style/fourColumnSection.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Photography = () => (
  <>
    <Row>
      <Col>
        <h2 className={SectionStyle.title}>photography</h2>
        <hr className={SectionStyle.line} />
      </Col>
    </Row>
    <section className={SectionStyle.section}>
      <Row>
        <Col xs="12" md="3" className={SectionStyle.link}>
          <a href="/product">
            <Row className={SectionStyle.picture}>
              <StaticImage
                src="../images/things.jpg"
                alt="Necklace"
                transformOptions={{ fit: 'contain' }}
                placeholder="blurred"
                backgroundColor="transparent"
              />
            </Row>
            <Row>
              <h2 className={SectionStyle.subTitle}>Product</h2>
            </Row>
          </a>
        </Col>
        <Col xs="12" md="3" className={SectionStyle.link}>
          <a href="/places">
            <Row className={SectionStyle.picture}>
              <StaticImage
                src="../images/places.jpg"
                alt="Sun rays on Lincoln Memorial"
                transformOptions={{ fit: 'contain' }}
                placeholder="blurred"
                backgroundColor="transparent"
              />
            </Row>
            <Row>
              <h2 className={SectionStyle.subTitle}>Places</h2>
            </Row>
          </a>
        </Col>
        <Col xs="12" md="3" className={SectionStyle.link}>
          <a href="/treats">
            <Row className={SectionStyle.picture}>
              <StaticImage
                src="../images/treats.jpg"
                alt="Sweet Desserts"
                transformOptions={{ fit: 'contain' }}
                placeholder="blurred"
                backgroundColor="transparent"
              />
            </Row>
            <Row>
              <h2 className={SectionStyle.subTitle}>Treats</h2>
            </Row>
          </a>
        </Col>
        <Col xs="12" md="3" className={SectionStyle.link}>
          <a href="/people">
            <Row className={SectionStyle.picture}>
              <StaticImage
                src="../images/people.jpg"
                alt="Lady Smiling in the sun"
                placeholder="blurred"
                transformOptions={{ fit: 'contain' }}
                backgroundColor="transparent"
              />
            </Row>
            <Row>
              <h2 className={SectionStyle.subTitle}>People</h2>
            </Row>
          </a>
        </Col>
      </Row>
    </section>
  </>
);

export default Photography;
