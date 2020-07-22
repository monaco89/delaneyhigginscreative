import React, { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'

const StyePage = () => {
  const [images, setImages] = useState([])
  const [loaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = (count = 7) => {
    axios
      .get('https://res.cloudinary.com/nickmonaco/image/list/photography.json')
      .then(res => {
        // console.log(res.data.resources)
        setImages(res.data.resources)
        setIsLoaded(true)
      })
  }

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
            {loaded ? <ImageGallery gallery={images} /> : 'Loading...'}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StyePage
