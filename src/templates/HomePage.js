import React from 'react';
import { graphql } from 'gatsby';
import { Container } from 'reactstrap';
import HomeHero from '../components/HomeHero';
import AboutMe from '../components/AboutMe';
import Design from '../components/Design';
import InstagramFeed from '../components/InstagramFeed';
import Layout from '../components/Layout';
import Photography from '../components/Photography';
import Styling from '../components/Styling';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePageTemplate = ({ body }) => (
  <main className="Home">
    <HomeHero large />
    <Photography />
    <AboutMe body={body} />
    <Styling />
    <Design />
    <InstagramFeed />
  </main>
);

const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <Container fluid>
      <HomePageTemplate {...page} body={page.html} />
    </Container>
  </Layout>
);

export default HomePage;

export const pageQuery = graphql`
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        featuredImage
      }
    }
  }
`;
