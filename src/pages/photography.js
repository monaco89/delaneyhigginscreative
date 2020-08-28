import React from 'react'
import Layout from '../components/Layout'
import { useStaticQuery, graphql } from 'gatsby'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'

const StyePage = () => {
  const data = useStaticQuery(graphql`
    query PhotoCloudinaryImage {
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
        canonicalLink: '/photography',
        title: 'Photography',
        description: 'Photography by delaney higgins'
      }}
    >
      <section className="section">
        <div className="container">
          <div className="content">
            <PageHeader title="Photography" subtitle="" />
            <ImageGallery images={clImages} tag="photography" />
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StyePage
