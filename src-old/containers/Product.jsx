import React, { useState } from 'react'
import '@styles/Product.sass';
import Figure from '@components/Figure';
import bike from '@images/bike.jpeg';
import addCart from '@icons/bt_add_to_cart.svg';
import addedCart from '@icons/bt_added_to_cart.svg';

const Product = () => {
  const [cart, setCart] = useState(false);

  const handleCart = () => {
    setCart(true);
  }

  return (
    <div className="card">
      <Figure figureClass="card--image" imageClass="image" src={bike}alt="Product image">
        <div className="cart--message hidden">Removed from cart</div>
      </Figure>

      <div className="card--footer">
        <div className="info">
          <p className="price">$120,00</p>
          <p className="product">Bike</p>
        </div>

        <Figure onClick={handleCart} figureClass="cart__container" imageClass="cart" src={!cart ? addCart : addedCart} alt="Cart icon" />
      </div>
    </div>
  )
}

export default Product
