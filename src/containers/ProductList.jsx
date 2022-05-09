import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '../hooks/useGetProducts';
import '@styles/ProductList.scss';

const ProductList = () => {
	const products = useGetProducts();

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product => (
					<ProductItem
						key={product.id}
						title={product.title}
						price={product.price}
						image={product.images[0]}
					/>
				))}
			</div>
		</section>
	);
}

export default ProductList;
