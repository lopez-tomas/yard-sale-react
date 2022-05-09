import { useState, useEffect } from "react";
import axios from "axios";

const API = 'https://api.escuelajs.co/api/v1/products';

const useGetProducts = (limit = 6, offset = 0) => {
  const [products, setProducts] = useState([]);

	const getProducts = async () => {
		const response = await axios.get(`${API}?limit=${limit}&offset=${offset}`);
		setProducts(response.data);
	}

	useEffect(() => {
		getProducts();
	}, []);

  return products;
};

export default useGetProducts;