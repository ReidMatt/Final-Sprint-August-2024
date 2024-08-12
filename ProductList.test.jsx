import React from 'react';
import {render, screen} from '@testing-library/react';
import ProductList from '../components/ProductList';
import { getProducts} from '../api/api';

jest.mock('../api/api', () => ({
  getProducts: jest.fn(),
}));

describe('ProductList Component', () => {
  it('should render a list of product', async () => {

    const products = [
      {id: 1, name: 'Product 1', price: 10},
      {id: 2, name: 'Product 2', price: 20},
    ];

    getProducts.mockResolvedValueOnce(products);

    render(<ProductList />);

    const product1 = await screen.findByText('Product 1 - $10');
    const product2 = await screen.findByText('Product 2 - $20'); 
  });
});
