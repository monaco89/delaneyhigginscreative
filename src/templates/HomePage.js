import React from 'react'
import { graphql } from 'gatsby'
import HomeHero from '../components/HomeHero'
import Content from '../components/Content'
import Layout from '../components/Layout'
import Image from '../components/Image'
import DH from '../../static/images/dh.jpg'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <HomeHero large backgroundImage={featuredImage} />
    <section className="section">
      <div style={{ marginTop: '100px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
          className="bam"
        >
          <img src={DH} style={{ height: '450px' }} className="hero" />
          <div
            className="hero"
            style={{
              backgroundColor: 'white',
              color: 'black',
              maxWidth: '600px',
              padding: '1.5em',
              textAlign: 'left',
              maxHeight: '500px',
              overflow: 'scroll'
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
      <div className="container">{/* <Content source={body} /> */}</div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
