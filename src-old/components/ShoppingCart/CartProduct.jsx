import React from 'react';
import Figure from '@components/Figure';
import bike from '@images/bike.jpeg';
import remove from '@icons/icon_close.png';

const CartProduct = () => {
  return (
    <div className="product">
      <div>
        <Figure figureClass="product--image__container" imageClass="product--image" src={bike} alt="Product image" />

        <p className="product--name">Bike</p>
      </div>

      <div>
        <p className="product--price">$ 30,00</p>
          <a href="">
            <img className="product--remove" src={remove} alt="Remove product" />
          </a>
      </div>
    </div>
  )
}

export default CartProduct;