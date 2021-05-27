import * as React from 'react';
import styled from 'styled-components';
import { FiMaximize, FiMinimize } from 'react-icons/fi';
import * as GalleryStyle from '../style/ImageGallery.module.css';

const ExpandButton = styled((props) => <button type="button" {...props} />)`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  outline: none;
  position: absolute;
  top: 5px;
  right: 5px;
`;

const GalleryImageListItem = styled.div`
  position: ${(props) => (props.expanded ? 'absolute' : 'relative')};

  transition: top 0.5s, max-width 0.5s, z-index: 0.5s;
  /* https://css-tricks.com/full-width-containers-limited-width-parents/#article-header-id-6 */
  max-width: ${(props) => (props.expanded ? '100vw' : '100%')};
  z-index: ${(props) => (props.expanded ? '2' : '1')};
  top: ${(props) => (props.expanded ? '0' : '1')};
  left: 0;
  right: 0;
  margin-left: 0;
  margin-right: 0;
`;

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

const ImageItem = ({ image, focus }) => {
  const isMobile = window.innerWidth <= 768;
  const [expanded, setExpanded] = React.useState(false);
  const ExpandIcon = expanded ? FiMinimize : FiMaximize;

  return (
    <GalleryImageListItem expanded={expanded}>
      <figure>
        <img
          src={`https://res.cloudinary.com/nickmonaco/image/upload/${image.public_id}.jpg`}
          alt="style by delaney"
        />
        {!isMobile && (
          <ExpandButton
            onClick={() => {
              setExpanded(!expanded);
              !expanded &&
                focus.current.scrollIntoView({
                  behavior: 'smooth',
                });
            }}
            aria-label={expanded ? 'Collapse image' : 'Expand image'}
          >
            <ExpandIcon />
          </ExpandButton>
        )}
      </figure>
    </GalleryImageListItem>
  );
};

export default ImageGallery;
