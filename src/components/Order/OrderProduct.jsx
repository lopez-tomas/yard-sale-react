import React from 'react';
import Figure from '@components/Figure';
import bike from '@images/bike.jpeg';

const OrderProduct = ({ productName, productPrice }) => {
  return (
    <div class="product">
      <div>
        <Figure figureClass="product--image__container" imageClass="product--image" src={bike} alt="Product image" />

        <p class="product--name">{productName}</p>
      </div>

      <p class="product--price">$ ${productPrice}</p>
    </div>
  )
}

export default OrderProduct;