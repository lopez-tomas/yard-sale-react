import React from 'react'
import '@styles/Product.sass';

const Product = () => {
  return (
    <div className="card">
      <figure className="card--image">
        <img className="image" src="./images/bike.jpeg" alt="Product image" />
        <div className="cart--message hidden">Removed from cart</div>
      </figure>

      <div className="card--footer">
        <div className="info">
          <p className="price">$120,00</p>
          <p className="product">Bike</p>
        </div>

        <figure className="cart__container">
          <img className="cart" src="./icons/bt_add_to_cart.svg" alt="Cart icon" />
        </figure>
      </div>
    </div>
  )
}

export default Product
