import React from 'react';
import {render, screen} from '@testing-library/react';
import ShoppingCart from '../components/ShoppingCart';
import {ShoppingCartContext, ShoppingCartProvider} from '../contexts/ShoppingCartContext';

describe('ShoppingCart Component', () => {

  const cartItem = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2 },
    { id: 2, name: 'Product 2', price: 20, quantity: 1 },
  ];

  render(
    <ShoppingCartContext.Provider value={{cartitems}}></ShoppingCartContext.Provider>
  );

  expect(screen.getByText('Product 1')).toBeInTheDocument();
  expect(screen.getByText('Product 2')).toBeInTheDocument();
  expect(screen.getByText('$10 x 2')).toBeInTheDocument();
  expect(screen.getByText('$20 x 1')).toBeInTheDocument();
});

it('should correctly calculate and display the total price', () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2},
    {id: 2, name: 'Product 2', price: 20, quantity: 1},
  ];

  render(
    <ShoppingCartContext.Provider value={{cartItems}}></ShoppingCartContext.Provider>
  );

  expect(screen.getByText('Total: $40')).toBeInTheDocument();
});

