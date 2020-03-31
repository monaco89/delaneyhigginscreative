import React, { useState } from 'react'
import Layout from '../../components/Layout'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'

const Image = ({ url, key }) => (
  <div className="image-item" key={key}>
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
    const apiRoot = 'https://api.unsplash.com'
    const accessKey = 'xVZ2D44A9qBV0wxv6Um3RVIuiP5isGgOfKRliMnPtNs'

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
      .then(res => {
        setImages([...images, ...res.data])
        setIsLoaded(true)
      })
  }

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <h1 style={{ textAlign: 'left', fontSize: '5rem' }}>Style</h1>
            <InfiniteScroll
              dataLength={images}
              next={() => fetchImages(5)}
              hasMore={true}
              loader={<p>loading...</p>}
            >
              <div className="image-grid" style={{ marginTop: '30px' }}>
                {loaded
                  ? images.map((image, index) => (
                      <Image url={image.urls.regular} key={index} />
                    ))
                  : ''}
              </div>
            </InfiniteScroll>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default StyePage
