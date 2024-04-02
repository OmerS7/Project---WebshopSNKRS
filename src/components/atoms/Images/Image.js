import React from 'react';

const PngImage = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} />;
};

export default PngImage;