import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';

const Shop = () => (
  <Switch>
    <Route path="/shop/cart" render={() => (<div><h1>Cart</h1></div>)} />
    <Route path="/shop/orders" render={() => (<div><h1>My Orders</h1></div>)} />
    <Route path="/shop" component={Layout} />
  </Switch>
);

export default Shop;
