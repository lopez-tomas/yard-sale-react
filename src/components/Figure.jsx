import React from 'react';
import '@styles/modules/_logo.sass';

const Figure = ({ figureClass, imageClass, src, alt}) => {
  return (
    <figure className={figureClass}>
      <img className={imageClass} src={src} alt={alt} />
    </figure>
  )
}

export default Figure;