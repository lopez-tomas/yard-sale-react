import React from 'react';
import CartProduct from '@components/ShoppingCart/CartProduct';
import CartTotal from '@components/ShoppingCart/CartTotal';
import Button from '@components/Button';
import '@styles/ShoppingCart.sass';

const ShoppingCart = () => {
  return (
    <aside className="product-detail">
      <div className="products--header">
        <a href="">
          <img className="arrow" src="./icons/flechita.svg" alt="" />
        </a>
        <p className="title">Shopping cart</p>
      </div>

      <div className="products">
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <CartProduct />
      </div>

      <CartTotal />

      <Button className="add_button" type="submit">
        Checkout
      </Button>
    </aside>
  )
}

export default ShoppingCart;