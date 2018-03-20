import * as actionTypes from '../actions/actionTypes';
import { addToCart, removeFromCart } from './helpers/cart';

const initialState = {
  services: [],
  totalPrice: 0,
  hasItems: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return addToCart(state, action.payload);
    case actionTypes.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    default:
      return state;
  }
};

export default reducer;
