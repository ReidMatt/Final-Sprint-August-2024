const BASE_URL = 'http://localhost:5000';

export const getProducts = async () => {
  const response = await fetch('${BASE_URL}/products');
  return response.json();
};

export const getProductById = async (productId) => {
  const response = await fetch('${BASE_URL}/product/${productId}');
  return response.json();
};

