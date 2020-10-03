import * as React from 'react'
import GalleryStyle from '../style/ImageGallery.module.css'

const ImageGallery = ({ images, tag }) => (
  <div className={GalleryStyle.imageGrid}>
    {/* {images
      ?.filter(image => image.node.tags.includes(tag))
      .map((image, index) => (
        <div className="image-item" key={`${index}-cl`}>
          <img src={image.node.secure_url} alt={'no alt :('} />
        </div>
      ))} */}
    {images.map((image, i) => (
      <div lassName={GalleryStyle.imageItem} key={`${i}-cl`}>
        <img
          src={`https://res.cloudinary.com/nickmonaco/image/upload/${image.public_id}.jpg`}
          alt="style by delaney"
        />
      </div>
    ))}
  </div>
)

export default ImageGallery
