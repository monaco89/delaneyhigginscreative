import * as React from 'react';
import ImageItem from './ImageItem';
import * as GalleryStyle from '../style/ImageGallery.module.css';

const ImageGallery = ({ images }) => {
  const focus = React.createRef();

  return (
    <div className={GalleryStyle.photos} ref={focus}>
      {images.map((image) => (
        <ImageItem image={image} key={image.public_id} focus={focus} />
      ))}
    </div>
  );
};

export default ImageGallery;
