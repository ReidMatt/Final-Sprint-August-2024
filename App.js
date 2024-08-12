import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ShoppingCart from './components/ShoppingCart';
import Checkout from './components/Checkout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={productList}/>
     <Route path="/product/:id" component={ProductDetails}/>
     <Route path="/cart" component={ShoppingCart}/>
     <Route path="/checkout" component={Checkout}/>
      </Switch>
    </Router>
  );
}
export default App;


 
      

