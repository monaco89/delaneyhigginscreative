import React, { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import PageHeader from '../components/PageHeader'
import ImageGallery from '../components/ImageGallery'
import { useStaticQuery, graphql } from 'gatsby'
import '../components/gallery.css'

const StyePage = () => {
  const data = useStaticQuery(graphql`
    query CloudinaryImage {
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
  const clImages = data.allCloudinaryMedia.edges
  console.log(data)
  // const [images, setImages] = useState([])
  // const [loaded, setIsLoaded] = useState(false)

  // React.useEffect(() => {
  //   fetchImages()
  // }, [])

  // const fetchImages = (count = 7) => {
  //   axios
  //     .get('https://res.cloudinary.com/nickmonaco/image/list/style.json')
  //     .then(res => {
  //       // console.log(res.data.resources)
  //       setImages(res.data.resources)
  //       setIsLoaded(true)
  //     })
  // }

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
            {/* {loaded ? <ImageGallery gallery={images} /> : 'Loading...'} */}
            <div>
              <div className="image-grid">
                {clImages
                  .filter(image => image.node.tags.includes('style'))
                  .map((image, index) => (
                    <div className="image-item" key={`${index}-cl`}>
                      <img src={image.node.secure_url} alt={'no alt :('} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StyePage
