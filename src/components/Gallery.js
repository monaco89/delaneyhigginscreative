import React, { useState, useCallback } from 'react'
import Layout from './Layout'
import axios from 'axios'
import PageHeader from './PageHeader'
import ImageGallery from './ImageGallery'

const Gallery = ({ tag, url, title }) => {
  const [images, setImages] = useState([])
  const [loaded, setIsLoaded] = useState(false)

  const fetchImages = useCallback(() => {
    axios
      .get(`https://res.cloudinary.com/nickmonaco/image/list/${tag}.json`)
      .then((res) => {
        setImages(res.data.resources)
        setIsLoaded(true)
      })
  }, [tag])

  React.useEffect(() => {
    fetchImages()
  }, [fetchImages])

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
            {loaded ? (
              images ? (
                <ImageGallery images={images} />
              ) : (
                'No Pictures Available'
              )
            ) : (
              'Loading...'
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Gallery
