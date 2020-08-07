import React, { Fragment, useEffect, useState } from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Meta from './Meta'
import Nav from './Nav'
import Footer from './Footer'
import { Provider as StyletronProvider } from 'styletron-react'
import { BaseProvider, LightTheme } from 'baseui'

import 'modern-normalize/modern-normalize.css'
import './globalStyles.css'

export default ({ children, meta, title }) => {
  const [engine, setEngine] = useState(null)

  useEffect(() => {
    // Load the `styletron-engine-atomic` package dynamically.
    // Reason: It requires use of `document`, which is not available
    // outside the browser, so we need to wait until it successfully loads.
    // Source: https://www.gatsbyjs.org/docs/debugging-html-builds/
    import('styletron-engine-atomic').then(styletron => {
      const clientEngine = new styletron.Client()
      setEngine(clientEngine)
    })
  }, [])

  if (!engine) return null

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
