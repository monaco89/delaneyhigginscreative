import * as React from 'react'

const ImageGallery = ({ images, tag }) => (
  <div className="image-grid">
    {images
      ?.filter(image => image.node.tags.includes(tag))
      .map((image, index) => (
        <div className="image-item" key={`${index}-cl`}>
          <img src={image.node.secure_url} alt={'no alt :('} />
        </div>
      )) || 'Loading'}
  </div>
)

export default ImageGallery
