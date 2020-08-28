import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'

const StyePage = () => {
  const data = useStaticQuery(graphql`
    query IDCloudinaryImage {
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
        canonicalLink: '/interiordesign',
        title: 'Interior Design',
        description: 'Interior design photos by delaney higgins'
      }}
    >
      <section className="section">
        <div className="container">
          <div className="content">
            <PageHeader title="Interior Design" subtitle="" />
            <ImageGallery images={clImages} tag="interiordesign" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StyePage
