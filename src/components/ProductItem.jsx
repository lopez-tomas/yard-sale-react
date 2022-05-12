import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext';
import '@styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';
import addedToCartIcon from '@icons/bt_added_to_cart.svg';
import defaultImage from '@images/bike.jpeg';

const ProductItem = ({ product }) => {
	const { state, addToCart, removeFromCart } = useContext(AppContext);

	const isProductAdded = () => state.cart.some(item => item.id == product.id);

	const handleClick = item => {
		isProductAdded() ? removeFromCart(item.id) : addToCart(item);
	}

	const image = product.images[0] ? product.images[0] : defaultImage;
	const imageAlt = product.images[0] ? product.title : 'Default image';

	return (
		<div className="ProductItem">
			<img src={image} alt={imageAlt} />
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={() => handleClick(product)}>
					<img
						src={!isProductAdded() ? addToCartIcon : addedToCartIcon}
						alt={!isProductAdded() ? 'Add to cart icon' : 'Added to cart icon'}
					/>
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
