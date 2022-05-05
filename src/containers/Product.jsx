import React from 'react'
import '@styles/Product.sass';
import Figure from '@components/Figure';

const Product = () => {
  return (
    <div className="card">
      <Figure figureClass="card--image" imageClass="image" src="./images/bike.jpeg" alt="Product image">
        <div className="cart--message hidden">Removed from cart</div>
      </Figure>

      <div className="card--footer">
        <div className="info">
          <p className="price">$120,00</p>
          <p className="product">Bike</p>
        </div>

        <Figure figureClass="cart__container" imageClass="cart" src="./icons/bt_add_to_cart.svg" alt="Cart icon" />
      </div>
    </div>
  )
}

export default Product
