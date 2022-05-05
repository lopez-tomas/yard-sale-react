import React from 'react';
import '@styles/modules/_inputs.sass';
import '@styles/modules/_primary-btn.sass';

const Input = ({ type, id, placeholder, value}) => {
  if (value == undefined) {
    return (
      <input className="input" type={type} id={id} placeholder={placeholder} required />
    )
  } else {
    return (
      <input className="primary__btn login__btn" type={type} value={value} />
    )
  }
}

export default Input;