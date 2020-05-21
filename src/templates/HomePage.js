import React from 'react'
import { graphql } from 'gatsby'
import HomeHero from '../components/HomeHero'
import InstagramFeed from '../components/InstagramFeed'
// import Content from '../components/Content'
import Layout from '../components/Layout'
// import Image from '../components/Image'
import DH from '../../static/images/dh.jpg'
// import skills from '../../static/images/skills.png'
import collage from '../../static/images/collage.png'
import home from '../../static/images/home.png'
import merchandising from '../../static/images/merchandising.png'
import style from '../../static/images/style.png'
import sexy from '../../static/images/sexy.png'

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
          <img src={DH} style={{ height: '550px' }} className="hero" />
          <div
            className="hero"
            style={{
              backgroundColor: 'white',
              color: 'black',
              maxWidth: '600px',
              padding: '1.5em',
              textAlign: 'left',
              height: '550px',
              overflow: 'scroll'
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
      <div className="container">{/* <Content source={body} /> */}</div>
    </section>
    <section className="section" style={{ marginTop: '150px' }}>
      <div className="container">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}
          className="skills"
        >
          <p>Visual Merchandising</p>
          <p style={{ borderRight: '4px solid #7C4847' }}>
            <a href="/style">Styling</a>
          </p>
          <p
            style={{
              fontSize: '4.0rem',
              borderRight: '4px solid #7C4847',
              borderLeft: '4px solid #7C4847'
            }}
          >
            Skills In:
          </p>
          <p style={{ borderLeft: '4px solid #7C4847' }}>Photography</p>
          <p>Interior Design</p>
        </div>
      </div>
    </section>
    <section className="section" style={{ marginTop: '150px' }}>
      <div className="container">
        <img src={collage} style={{ width: '100%' }} />
      </div>
    </section>
    <section className="section" style={{ marginTop: '150px' }}>
      <div className="container">
        <img src={home} style={{ width: '100%' }} />
      </div>
    </section>
    <section className="section" style={{ marginTop: '150px' }}>
      <div className="container">
        <img src={merchandising} style={{ width: '100%' }} />
      </div>
    </section>
    <section className="section" style={{ marginTop: '150px' }}>
      <div className="container">
        <img src={style} style={{ width: '100%' }} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <img src={sexy} style={{ width: '100%' }} />
      </div>
    </section>
    <section className="section">
      <div className="container">
        <h2 className="taCenter">
          <a href="https://instagram.com/higginsdelaney">@higginsdelaney</a>
        </h2>
        <br />
        <InstagramFeed count="8" />
      </div>
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
