import React, { useContext, useState } from 'react';
import AppContext from '@context/AppContext';
import '@styles/OrderItem.scss';
import closeIcon from '@icons/icon_close.png';
import defaultImage from '@images/bike.jpeg';

const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const image = product.images[0] ? product.images[0] : defaultImage;
	const imageAlt = product.images[0] ? product.title : 'Default image';

	const handleRemove = (id) => {
		removeFromCart(id);
	};

	return (
		<div className="OrderItem">
			<figure>
				<img src={image} alt={imageAlt} />
			</figure>
			<p>{product.title}</p>
			<p>${product.price}</p>
			<img
				className="removeIcon"
				src={closeIcon}
				alt="close"
				onClick={() => handleRemove(product.id)}
			/>
		</div>
	);
}

export default OrderItem;
