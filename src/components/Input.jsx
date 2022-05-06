import React from 'react';
import '@styles/modules/_inputs.sass';
import '@styles/modules/_primary-btn.sass';

const Input = ({ type, id, placeholder, value, disabled = false, secondary = false }) => {
  if (type != "submit") {
    return (
      <input className={disabled ? "input disabled" : "input"} type={type} id={id} placeholder={placeholder} value={value} disabled={disabled} required />
    )
  } else {
    return (
      <input className={secondary ? "secondary__btn" : "primary__btn"} type={type} value={value} />
    )
  }
}

export default Input;