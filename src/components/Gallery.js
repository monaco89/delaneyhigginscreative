import React, { useState } from 'react'
import Layout from './Layout'
import axios from 'axios'
import PageHeader from './PageHeader'
import ImageGallery from './ImageGallery'
// import { useStaticQuery, graphql } from 'gatsby'
import './gallery.css'

const Gallery = ({ tag, url, title }) => {
  // const data = useStaticQuery(graphql`
  //   query StyleCloudinaryImage {
  //     allCloudinaryMedia {
  //       edges {
  //         node {
  //           secure_url
  //           tags
  //         }
  //       }
  //     }
  //   }
  // `)
  // const clImages = data?.allCloudinaryMedia?.edges
  const [images, setImages] = useState([])
  const [loaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = (count = 7) => {
    axios
      .get(`https://res.cloudinary.com/nickmonaco/image/list/${tag}.json`)
      .then(res => {
        // console.log(res.data.resources)
        setImages(res.data.resources)
        setIsLoaded(true)
      })
  }

  return (
    <Layout
      meta={{
        canonicalLink: url,
        title,
        description: `${title} images by delaney higgins`
      }}
    >
      <section className="section">
        <div className="container">
          <div className="content">
            <PageHeader title={title} subtitle="" />
            {loaded ? <ImageGallery images={images} /> : 'Loading...'}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gallery
