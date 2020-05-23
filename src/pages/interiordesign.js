import React, { useState } from 'react'
import Layout from '../components/Layout'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import PageHeader from '../components/PageHeader'

const ImageTile = ({ url }) => (
  <div className="image-item">
    <img src={url} />
  </div>
)

const StyePage = () => {
  const [images, setImages] = useState([])
  const [loaded, setIsLoaded] = useState(false)

  React.useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = (count = 7) => {
    axios
      .get(
        'https://res.cloudinary.com/nickmonaco/image/list/interiordesign.json'
      )
      .then(res => {
        setImages(res.data.resources)
        setIsLoaded(true)
      })
  }

  console.log(images)

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <PageHeader title="Interior Design" subtitle="" />
            <InfiniteScroll
              dataLength={images}
              next={() => fetchImages(5)}
              hasMore={true}
              loader={!loaded && !images && <p>loading...</p>}
            >
              <div className="image-grid" style={{ marginTop: '30px' }}>
                {loaded
                  ? images.map((data, i) => (
                      <ImageTile
                        url={`https://res.cloudinary.com/nickmonaco/image/upload/${data.public_id}.jpg`}
                        key={i}
                      />
                    ))
                  : 'No Photos'}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StyePage
