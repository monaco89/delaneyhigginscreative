import { styled } from 'baseui'
import { FlexGrid, FlexGridItem } from 'baseui/flex-grid'
import * as React from 'react'

const Image = styled('img', {
  objectFit: 'cover',
  objectPosition: '100% 0',
  width: '100%',
  height: '100%'
})

const ImageGallery = ({ gallery }) => (
  <FlexGrid
    flexGridColumnCount={[1, 2, 3]}
    flexGridColumnGap={['scale0', 'scale200']}
    flexGridRowGap={['scale0', 'scale200']}
  >
    {gallery.map((data, i) => (
      <FlexGridItem key={i} flexGridItemIndex={i}>
        <Image
          src={`https://res.cloudinary.com/nickmonaco/image/upload/${data.public_id}.jpg`}
          alt="style by delaney"
        />
      </FlexGridItem>
    ))}
  </FlexGrid>
)

export default ImageGallery
