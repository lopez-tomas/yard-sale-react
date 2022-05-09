import React from 'react';
import Category from '@components/Category';
import '@styles/Categories.sass';

const Categories = () => {
  return (
    <ul className="categories">
      <Category all={true}>All</Category>
      <Category>Clothes</Category>
      <Category>Electronics</Category>
      <Category>Furnitures</Category>
      <Category>Toys</Category>
      <Category>Others</Category>
    </ul>
  )
}

export default Categories;