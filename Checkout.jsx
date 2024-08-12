import React, {useContext} from 'react';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

const Checkout = () => {
  alert('Checkout successful!');
};

return (
  <div>
    <h1>Checkout</h1>
    <ul>
      {cartItems.map(item => (
        <li key={item.id}>
          {item.name} - ${item.price}
        </li>
      ))}
    </ul>
    <button onClick={handleCheckout}>Confirm Checkout</button>
  </div>
  ); 

export default Checkout;
