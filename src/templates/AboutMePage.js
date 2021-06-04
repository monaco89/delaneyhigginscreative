import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { Row, Col } from 'reactstrap';
import PageHeader from '../components/PageHeader';
import Content from '../components/Content';
import Layout from '../components/Layout';
import * as Styles from '../style/AboutMe.module.css';

import '../style/ContactPage.css';

const AboutMePageTemplate = ({
  body,
  title,
  subtitle,
  featuredImage,
  aboutMePic,
}) => (
  <main className="Contact">
    <PageHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />
    <section className={`${Styles.pageSection} section Contact--Section1`}>
      <Row>
        <Col xs="0" md="1" />
        <Col xs="12" md="6" className={Styles.col}>
          <GatsbyImage
            image={aboutMePic.childImageSharp.gatsbyImageData}
            alt="about me"
            style={{ maxWidth: '500px' }}
          />
        </Col>
        <Col xs="12" md="5">
          <Content source={body} className="lh30" />
        </Col>
      </Row>
      <br />
    </section>
  </main>
);

const AboutMePage = ({ data: { page, aboutMePic } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <AboutMePageTemplate
      {...page.frontmatter}
      body={page.html}
      aboutMePic={aboutMePic}
    />
  </Layout>
);

export default AboutMePage;

export const pageQuery = graphql`
  query AboutMePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
      }
    }
    aboutMePic: file(relativePath: { eq: "aboutme.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
