import React from 'react';
import { useQuery } from 'react-query';
import { loadImagesByTag } from '../utils/api';
import ImageCarousel from './ImageCarousel';
import ImageGallery from './ImageGallery';

const ImageSection = ({ tag, carousel }) => {
  const { isLoading, isError, data, error } = useQuery(`images-${tag}`, () =>
    loadImagesByTag(tag)
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <>
      {isError && <p>{error.message}</p>}
      {!isLoading ? (
        carousel ? (
          <ImageCarousel images={data || []} />
        ) : (
          <ImageGallery images={data || []} />
        )
      ) : (
        'Loading...'
      )}
    </>
  );
};

export default ImageSection;
