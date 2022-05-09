import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductItem from '@components/ProductItem';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {
	const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await axios.get(`${API}?limit=5&offset=1`);
		setProducts(response.data);
	}

	useEffect(() => {
		getProducts();
	}, [])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem
						key={product.id}
						title={product.title}
						price={product.price}
						image={product.images[0]} />
				))}
			</div>
		</section>
	);
}

export default ProductList;
