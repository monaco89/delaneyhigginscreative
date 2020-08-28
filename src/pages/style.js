import React from 'react'
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'
import { useStaticQuery, graphql } from 'gatsby'
import '../components/gallery.css'

const StyePage = () => {
  const data = useStaticQuery(graphql`
    query StyleCloudinaryImage {
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
      title="Styling"
      meta={{
        canonicalLink: '/style',
        title: 'Styling',
        description: 'Styling photos by delaney higgins'
      }}
    >
      <section className="section">
        <div className="container">
          <div className="content">
            <PageHeader title="Styling" subtitle="" />
            <ImageGallery images={clImages} tag="style" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StyePage
