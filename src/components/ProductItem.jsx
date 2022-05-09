import React, { useState } from 'react';
import '@styles/ProductItem.scss';
import addToCartIcon from '@icons/bt_add_to_cart.svg';

const ProductItem = () => {
	const [message, setMessage] = useState('');
	const [cart, setCart] = useState(false);

	const handleMessage = () => {
		if (!cart) {
			setMessage('Product added to cart');
		} else {
			setMessage('Product removed from cart');
		}
	}

	const handleCart = () => {
		setCart(!cart);
		handleMessage();
	}

	return (
		<div className="ProductItem">
			<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
			<div>
				{message}
			</div>
			<div className="product-info">
				<div>
					<p>$120,00</p>
					<p>Bike</p>
				</div>
				<figure onClick={handleCart}>
					<img src={addToCartIcon} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;
