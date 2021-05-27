import React from 'react'
import { useQuery } from 'react-query'
import { loadImagesByTag } from '../utils/api'
import ImageGallery from './ImageGallery'

const ImageSection = ({ tag }) => {
  const { isLoading, isError, data, error } = useQuery(`images-${tag}`, () =>
    loadImagesByTag(tag)
  )

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  console.log(data)
  return (
    <>
      {isError && <p>{error.message}</p>}
      {!isLoading ? <ImageGallery images={data || []} /> : 'Loading...'}
    </>
  )
}

export default ImageSection
