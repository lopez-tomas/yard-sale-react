import React from 'react';
import '@styles/modules/_primary-btn.sass';
import '@styles/modules/_secondary-btn.sass';

const Button = ({ variant = false, children }) => {
  if (!variant) {
    return (
      <button className="primary__btn">{children}</button>
    )
  } else {
    return (
      <button className="secondary__btn">{children}</button>
    )
  }
}

export default Button;