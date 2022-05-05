import React from 'react';

const Label = ({ to, children }) => {
  return (
    <label class="label" for={to}>{children}</label>
  )
}

export default Label;