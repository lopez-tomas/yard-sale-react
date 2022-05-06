import React from 'react';
import Figure from '@components/Figure';

const CartProduct = () => {
  return (
    <div className="product">
      <div>
        <Figure figureClass="product--image__container" imageClass="product--image" src="./images/bike.jpeg" alt="Product image" />

        <p className="product--name">Bike</p>
      </div>

      <div>
        <p className="product--price">$ 30,00</p>
          <a href="">
            <img className="product--remove" src="./icons/icon_close.png" alt="Remove product" />
          </a>
      </div>
    </div>
  )
}

export default CartProduct;