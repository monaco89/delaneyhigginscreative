import React, { useState } from 'react'
import Layout from '../../components/Layout'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import PageHeader from '../../components/PageHeader'
// import { CloudinaryContext, Transformation, Image } from 'cloudinary-react'

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
        'https://res.cloudinary.com/nickmonaco/image/list/visualmerchandising.json'
      )
      .then(res => {
        // console.log(res.data.resources)
        setImages(res.data.resources)
        setIsLoaded(true)
      })
  }

  // TODO Make into own component
  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <PageHeader title="Visual Merchandising" subtitle="" />
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
