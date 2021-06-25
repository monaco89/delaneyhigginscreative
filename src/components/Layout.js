import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';

import 'modern-normalize/modern-normalize.css';
import '../style/globalStyles.css';

const Layout = ({ children, meta }) => (
  <StaticQuery
    query={graphql`
      query IndexLayoutQuery {
        settingsYaml {
          siteTitle
          siteDescription
          socialMediaCard {
            image
          }
        }
      }
    `}
    render={(data) => {
      const { siteTitle, socialMediaCard } = data.settingsYaml || {};

      return (
        <>
          <Meta
            siteTitle={siteTitle}
            absoluteImageUrl={
              socialMediaCard && socialMediaCard.image && socialMediaCard.image
            }
            {...meta}
            {...data.settingsYaml}
          />
          <Nav />
          <>{children}</>
          <Footer />
        </>
      );
    }}
  />
);

export default Layout;
