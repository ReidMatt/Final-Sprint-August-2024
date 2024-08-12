import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/api';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const ProductDetails = () => {
  const {id} = useparams();
  const product = getProductById(parseInt(id));
  const {addToCart} = useContext(ShoppingCartContext);

  if (!product) return <div>Product not found</div>;

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};