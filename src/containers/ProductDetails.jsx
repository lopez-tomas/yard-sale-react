import React from 'react';
import '@styles/ProductDetails.sass';

const ProductDetails = () => {
  return (
    <aside class="product-detail">
      <figure class="product-image__container">
        <img class="product-image" src="./images/bike.jpeg" alt="Product" />
      </figure>

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

        <button class="primary__btn add__button" type="submit">
          <img src="./icons/bt_add_to_cart.svg" alt="Add to cart" />
          Add to cart
        </button>
      </div>
	</aside>
  )
}

export default ProductDetails;
