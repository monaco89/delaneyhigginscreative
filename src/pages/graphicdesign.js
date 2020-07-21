import React, { useState } from 'react'
import Layout from '../components/Layout'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import PageHeader from '../components/PageHeader'

const ImageTile = ({ url }) => (
  <div className="image-item">
    <img src={url} alt="graphic design by delaney" />
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
        'https://res.cloudinary.com/nickmonaco/image/list/graphicdesign.json'
      )
      .then(res => {
        // console.log(res.data.resources)
        setImages(res.data.resources)
        setIsLoaded(true)
      })
  }

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
