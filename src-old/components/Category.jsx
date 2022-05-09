import React from 'react';
import '@styles/Categories.sass';

const Category = ({ all, children }) => {
  return (
    <li className={all ? "all" : ""}>
      <a href="#">{children}</a>
    </li>
  )
}

export default Category;