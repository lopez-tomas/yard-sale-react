import React from 'react';
import '@styles/modules/_logo.sass';
import mainLogo from '@logos/logo_yard_sale.svg';

const Figure = ({ logo = false, figureClass, imageClass, src, alt, children }) => {
  if (logo) {
    return (
      <figure className="logo__container">
        <img className="logo" src={mainLogo} alt="Yard Sale logo" />
      </figure>
    )
  } else {
    return (
      <figure className={figureClass}>
        <img className={imageClass} src={src} alt={alt} />
        {children}
      </figure>
    )
  }
}

export default Figure;