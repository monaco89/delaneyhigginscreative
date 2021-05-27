import React from 'react';
import Slider from 'react-slick';
import ImageItem from './ImageItem';
import * as CarouselStyle from '../style/ImageCarousel.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const isMobile = window.innerWidth <= 768;
  const focus = React.createRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
    adaptiveHeight: true,
  };

  return (
    <div className={CarouselStyle.container}>
      <Slider {...settings}>
        {images.map((image) => (
          <ImageItem
            image={image}
            key={image.public_id}
            focus={focus}
            expandable={false}
          />
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
