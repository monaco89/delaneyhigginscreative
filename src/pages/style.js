import React, { useState } from 'react'
import Layout from '../components/Layout'
import InfiniteScroll from 'react-infinite-scroll-component'
import axios from 'axios'
import PageHeader from '../components/PageHeader'
// import { makeStyles } from '@material-ui/core/styles'
// import GridList from '@material-ui/core/GridList'
// import GridListTile from '@material-ui/core/GridListTile'

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     justifyContent: 'space-around',
//     overflow: 'hidden',
//     backgroundColor: theme.palette.background.paper
//   },
//   gridList: {
//     width: '100%',
//     height: '100%'
//   }
//   /* Styles applied to the `div` element that wraps the children. */
//   // tile: {
//   //   position: 'relative',
//   //   display: 'block', // In case it's not rendered with a div.
//   //   height: '100%'
//   //   // overflow: 'hidden'
//   // }
//   // /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
//   // imgFullHeight: {
//   //   height: '100%',
//   //   transform: 'translateX(-50%)',
//   //   position: 'relative',
//   //   left: '50%'
//   // },
//   // /* Styles applied to an `img` element child, if needed to ensure it covers the tile. */
//   // imgFullWidth: {
//   //   width: '100%',
//   //   position: 'relative',
//   //   transform: 'translateY(-50%)',
//   //   top: '50%'
//   // }
// }))

const ImageTile = ({ url }) => (
  <div className="image-item">
    <img src={url} alt="style by delaney" />
  </div>
)

const StyePage = () => {
  const [images, setImages] = useState([])
  const [loaded, setIsLoaded] = useState(false)
  // const classes = useStyles()

  React.useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = (count = 7) => {
    axios
      .get('https://res.cloudinary.com/nickmonaco/image/list/style.json')
      .then(res => {
        // console.log(res.data.resources)
        setImages(res.data.resources)
        setIsLoaded(true)
      })
  }

  return (
    <Layout>
      <section className="section">
        <div className="container">
          <div className="content">
            <PageHeader title="Style" subtitle="" />
            {/* <div className={classes.root}>
              <GridList cellHeight={160} className={classes.gridList} cols={3}>
                {images.map(
                  tile => (
                    console.log(tile.width, tile.height, tile.public_id),
                    (
                      <GridListTile
                        key={tile.public_id}
                        cols={Math.floor(tile.width / 1750)}
                        rows={tile.height / 1500}
                      >
                        <img
                          src={`https://res.cloudinary.com/nickmonaco/image/upload/${tile.public_id}.jpg`}
                          style={{ height: '100%' }}
                          // alt={tile.title}
                          // height={tile.height || 405}
                          // width={tile.width || 270}
                        />
                      </GridListTile>
                    )
                  )
                )}
              </GridList>
            </div> */}
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
