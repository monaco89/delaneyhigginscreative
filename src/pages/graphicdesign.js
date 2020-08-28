import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'

const StyePage = () => {
  const data = useStaticQuery(graphql`
    query GDCloudinaryImage {
      allCloudinaryMedia {
        edges {
          node {
            secure_url
            tags
          }
        }
      }
    }
  `)
  const clImages = data?.allCloudinaryMedia?.edges

  return (
    <Layout
      meta={{
        canonicalLink: '/graphicdesign',
        title: 'Graphic Design',
        description: 'Graphic design images by delaney higgins'
      }}
    >
      <section className="section">
        <div className="container">
          <div className="content">
            <PageHeader title="Graphic Design" subtitle="" />
            <ImageGallery images={clImages} tag="graphicdesign" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StyePage
