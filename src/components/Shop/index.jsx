import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Layout';
import Container from '../UI/Container';
import Cart from './Cart';

const Shop = () => (
  <Switch>
    <Route path="/shop/cart" render={() => (
      <Container type="box"><Cart /></Container>
    )} />
    <Route path="/shop/orders" render={() => (<div><h1>My Orders</h1></div>)} />
    <Route path="/shop" component={Layout} />
  </Switch>
);

export default Shop;
