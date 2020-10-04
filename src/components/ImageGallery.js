import * as React from 'react'
import GalleryStyle from '../style/ImageGallery.module.css'

const ImageGallery = ({ images }) => (
  <div className={GalleryStyle.photos}>
    {images.map((image) => (
      <figure key={image.public_id}>
        <img
          src={`https://res.cloudinary.com/nickmonaco/image/upload/${image.public_id}.jpg`}
          alt="style by delaney"
        />
      </figure>
    ))}
  </div>
)

export default ImageGallery
