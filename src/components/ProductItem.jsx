import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ title, price, image }) => {
	const [message, setMessage] = useState('');
	const [cart, setCart] = useState(false);

	const handleMessage = () => {
		if (!cart) {
			setMessage('Added to cart');
		} else {
			setMessage('Removed from cart');
		}
	}

	const handleCart = () => {
		setCart(!cart);
		handleMessage();
	}

	return (
		<div className="ProductItem">
			<img src={image} alt={title} />
			<div>
				{message}
			</div>
			<div className="product-info">
				<div>
					<p>${price}</p>
					<p>{title}</p>
				</div>
				<figure onClick={handleCart}>
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
