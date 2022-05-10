import React, { useContext } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import closeIcon from '@icons/icon_close.png';

const OrderItem = ({ indexValue, product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (index) => {
		removeFromCart(index);
	};

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img
				className="removeIcon"
				src={closeIcon}
				alt="close"
				onClick={() => handleRemove(indexValue)}
			/>
		</div>
	);
}

export default OrderItem;
