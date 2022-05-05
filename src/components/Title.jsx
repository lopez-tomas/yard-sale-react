import React from 'react';

const Title = ({ divClass, title, subtitle }) => {
  return (
    <div className={divClass}>
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
    </div>
  )
}

export default Title;