import React from 'react'
import Helmet from 'react-helmet'
import { Link, StaticQuery, graphql } from 'gatsby'

import Layout from '../components/Layout'

const Error = () => (
  <StaticQuery
    query={graphql`
      query NotFoundPageQuery {
        globalSettings: settingsYaml {
          siteTitle
        }
      }
    `}
    render={() => (
      <Layout>
        <Helmet>
          <title>404 – Page Not Found</title>
        </Helmet>
        <section className="section thick">
          <div className="container skinny taCenter">
            <h1>404 - Page Not Found</h1>
            <p>
              We can't find the page you are looking for!
              <br />
              Head back to <Link to="/">Delaney Higgins</Link>
            </p>
          </div>
        </section>
      </Layout>
    )}
  />
)

export default Error
