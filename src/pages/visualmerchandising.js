import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'

const StyePage = () => {
  const data = useStaticQuery(graphql`
    query VMCloudinaryImage {
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
      title="Visual Merchandising"
      meta={{
        canonicalLink: '/visualmerchandising',
        title: 'Visual Merchandising',
        description: 'Visual Merchandising photos by delaney higgins'
      }}
    >
      <section className="section">
        <div className="container">
          <div className="content">
            <PageHeader title="Visual Merchandising" subtitle="" />
            <ImageGallery images={clImages} tag="visualmerchandising" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StyePage
