import React from 'react';
import '@styles/modules/_primary-btn.sass';
import '@styles/modules/_secondary-btn.sass';

const Button = ({ className, variant = false, type, children }) => {
  let style = !variant ? `primary__btn ${className}` : `secondary__btn ${className}`;
  return (
    <button className={style} type={type}>{children}</button>
  )
}

export default Button;