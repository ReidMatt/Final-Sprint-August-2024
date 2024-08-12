import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import ProductDetails from '../components/ProductDetails';
import { ShoppingCartContext, ShoppingCartProvider } from '../contexts/ShoppingCartContext';
import { getProductById } from '../api/api';

jest.mock('../api/api', () => ({
  getProductById: jest.fn()
}));

describe('ProductDetails Component', () => {
  it('should render the product details correctly', async () => {

    const product = { id:1, name: 'Product 1', description: 'Description of Product 1', price: 10};
    
    getProductById.mockResolvedValueOnce(procuct);

    render(
      <MemoryRouter>
        <ProductDetails />
        </MemoryRouter>
    );

    expect(await screen.findByText('Product 1')).toBeInTheDocument();
    expect(await screen.findByText('Description of Product 1')).toBeInTheDocument();
    expect(await screen.findByText('$10')).toBeInTheDocument();
  });

  it ('should call addToCart when the "Add to Cart" button is clicked', async () => {
    const addToCart = jest.fn();
    const product = {id: 1, name: 'Product 1', description: 'Description of Product 1', price: 10};

    getProductById.mockResolvedValueOnce(product);

    render(
      <ShoppingCartContext.Provider value={{ addToCart}}> 
      <MemoryRouter>
        <ProductDetails/>
        </MemoryRouter></ShoppingCartContext.Provider>
    );

    const button = await screen.findByText('Add to Cart');
    fireEvent.click(button);

    expect(addToCart),toHaveBeenCalledWith(product);
  });
});