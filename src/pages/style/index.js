import React, { useState } from 'react'
import Layout from '../../components/Layout'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
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
    const apiRoot = 'https://api.unsplash.com'
    const accessKey = 'xVZ2D44A9qBV0wxv6Um3RVIuiP5isGgOfKRliMnPtNs'

    // axios
    //   .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
    //   .then(res => {
    //     setImages([...images, ...res.data])
    //     setIsLoaded(true)
    //   })
    axios
      .get('https://res.cloudinary.com/nickmonaco/image/list/style.json')
      .then(res => {
        console.log(res.data.resources)
        setImages(res.data.resources)
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
              loader={!loaded && <p>loading...</p>}
            >
              <div className="image-grid" style={{ marginTop: '30px' }}>
                {loaded
                  ? images.map((data, i) => (
                      <ImageTile
                        url={`https://res.cloudinary.com/demo/image/upload/${data.public_id}.jpg`}
                        key={i}
                      />
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
