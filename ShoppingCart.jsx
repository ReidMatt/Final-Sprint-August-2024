import React, {useContext} from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const {cartItems, removeFromCart} = useContext(ShoppingCartContext);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <button onClick={() => removelFromCart(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <link to="/checkout">Proceed to Checkout</link>
    </div>
  );
};