import React from 'react';
import Figure from '@components/Figure';
import Button from '@components/Button';
import '@styles/ProductDetails.sass';
import bike from '@images/bike.jpeg';
import addCart from '@icons/bt_add_to_cart.svg';

const ProductDetails = () => {
  return (
    <aside class="product-detail">
      <Figure figureClass="product-image__container" imageClass="product-image" src={bike} alt="Product" />

      <div class="product-info">
        <div>
          <p class="product-price">$ 120,00</p>
          <p class="product-name">Bike</p>
        </div>

        <div class="product-description">
          <p>
            With its functional and practial interior, this refrigerator 
            also fulfills a decorative function, adding personality and 
            a retro-vintage aesthetic to your kitchen or workplace.
          </p>
        </div>

        <Button>
          <img src={addCart} alt="Add to cart" />
          Add to cart
        </Button>
      </div>
	</aside>
  )
}

export default ProductDetails;
