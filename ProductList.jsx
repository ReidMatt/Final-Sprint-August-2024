import React from 'react';
import {Link} from 'react-router-dom';
import {getProducts} from '../api';

const ProductList = () => {
  const products = getProducts();

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <link to={'/product/${product.id}'}>
              {product.name} - ${product.price}
            </link>
          </li>
        ))}
      </ul>
    </div>
  );
};