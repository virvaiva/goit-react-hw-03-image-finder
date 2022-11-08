import React from 'react';
import * as SC from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({
  id,
  webformatURL,
  tags,
  largeImageURL,
  showModal,
  imgInfo,
}) => (
  <SC.ImageGallery key={id} onClick={showModal}>
    <SC.GalleryItemImage
      src={webformatURL}
      alt={tags}
      dataLargeimageurl={largeImageURL}
      onClick={() => {
        imgInfo(largeImageURL);
      }}
    />
  </SC.ImageGallery>
);
ImageGalleryItem.propTypes = {
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  tags: PropTypes.string,
  showModal: PropTypes.func,
};
