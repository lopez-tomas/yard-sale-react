import React from 'react';
import '@styles/modules/_inputs.sass';
import '@styles/modules/_primary-btn.sass';
import '@styles/modules/_secondary-btn.sass';

const Input = ({ className, type, id, placeholder, value, disabled = false, secondary = false }) => {
  if (type != "submit") {
    let style = (className) ? `input ${className}` : "input";
    style = (disabled) ? `${style} disabled` : `${style}`;
    return (
      <input className={style} type={type} id={id} placeholder={placeholder} value={value} disabled={disabled} required />
    )
  } else {
    let style = (secondary) ? `secondary__btn ${className}` : `primary__btn ${className}`;
    return (
      <input className={style} type={type} value={value} />
    )
  }
}

export default Input;