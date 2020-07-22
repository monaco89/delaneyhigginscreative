import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider, LightTheme } from 'baseui'
import { Client as Styletron } from 'styletron-engine-atomic'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

const engine = new Styletron()

export default ({ children, meta, title }) => {
  return (
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
      render={data => {
        const { siteTitle, socialMediaCard } = data.settingsYaml || {}

        return (
          <StyletronProvider value={engine}>
            <BaseProvider theme={LightTheme}>
              <Fragment>
                <Helmet
                  defaultTitle={siteTitle}
                  titleTemplate={`%s | ${siteTitle}`}
                >
                  {title}
                  {/* Add font link tags here */}
                </Helmet>

                <Meta
                  absoluteImageUrl={
                    socialMediaCard &&
                    socialMediaCard.image &&
                    socialMediaCard.image
                  }
                  {...meta}
                  {...data.settingsYaml}
                />

                <Nav />

                <Fragment>{children}</Fragment>

                <Footer />
              </Fragment>
            </BaseProvider>
          </StyletronProvider>
        )
      }}
    />
  )
}
