import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions';
import Button from '../../UI/Button';

import styles from './cart.module.less';

const Cart = (props) => (
  <div className={styles.cart}>
    <h1 className={styles.header}>Cart</h1>
    {props.items.map(item => (
      <div key={item.id}>
        <h5 className={styles.itemHeader}>{item.title}</h5>
        <div className={styles.itemDetails}>
          <div>
            <p className={styles.itemDescription}>
              $ {item.price}
              <span className={styles.separator}> x </span>
              <span className={styles.quantity}>{item.quantity}</span>
            </p>
          </div>
          <div>
            <Button
              btnType="defaultSmall"
              onClick={() => { props.onRemoveItem(item.id) }}>
              less
            </Button>
            <Button
              btnType="accentSmall"
              onClick={() => { props.onAddItem(item) }}>
              more
            </Button>
          </div>
        </div>
      </div>
    ))}
    <p>Total Price: <span className={styles.quantity}>$ {props.totalPrice}</span></p>
    <Button disabled={!props.cartHasItems} btnType="accentSmall" btnClass={styles.btn}>Checkout</Button>
  </div>
);

const mapStateToProps = state => {
  return {
    items: state.cartReducer.services,
    totalPrice: state.cartReducer.totalPrice,
    cartHasItems: state.cartReducer.hasItems
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRemoveItem: itemId => dispatch(actions.removeFromCart(itemId)),
    onAddItem: item => dispatch(actions.addToCart(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
