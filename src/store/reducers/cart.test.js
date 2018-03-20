import reducer from './cart';
import * as actionTypes from '../actions/actionTypes';

const initialState = {
  services: [],
  totalPrice: 0,
  hasItems: false
};

const firstItem = {
  id: 'agile-design',
  desc: 'Description of service 1',
  price: 1000,
  title: 'Agile Product Design'
};

const secondItem = {
  id: 'web-development',
  desc: 'Description of service 2',
  price: 3000,
  title: 'Web Application Development'
};

describe('cart reducer', () => {
  it('returns initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('adds first item', () => {
    expect(
      reducer(initialState, {
        type: actionTypes.ADD_TO_CART,
        payload: firstItem
      })
    ).toEqual({
      ...initialState,
      services: [{ ...firstItem, quantity: 1 }],
      totalPrice: 1000,
      hasItems: true
    });
  });

  describe('increasing quantity of items', () => {
    let lastState = {};

    beforeEach(() => {
      lastState = reducer(initialState, {
        type: actionTypes.ADD_TO_CART,
        payload: firstItem
      });
    });

    it('adds same item twice', () => {
      expect(
        reducer(lastState, {
          type: actionTypes.ADD_TO_CART,
          payload: firstItem
        })
      ).toEqual({
        ...lastState,
        services: [{ ...firstItem, quantity: 2 }],
        totalPrice: firstItem.price * 2,
        hasItems: true
      });
    });

    it('adds another second item', () => {
      expect(
        reducer(lastState, {
          type: actionTypes.ADD_TO_CART,
          payload: secondItem
        })
      ).toEqual({
        ...lastState,
        services: [
          { ...firstItem, quantity: 1 },
          { ...secondItem, quantity: 1 }
        ],
        totalPrice: firstItem.price + secondItem.price,
        hasItems: true
      });
    });

    it('adds second item twice', () => {
      const state = reducer(lastState, {
        type: actionTypes.ADD_TO_CART,
        payload: secondItem
      });

      expect(
        reducer(state, {
          type: actionTypes.ADD_TO_CART,
          payload: secondItem
        })
      ).toEqual({
        ...state,
        services: [
          { ...firstItem, quantity: 1 },
          { ...secondItem, quantity: 2 }
        ],
        totalPrice: firstItem.price + secondItem.price * 2,
        hasItems: true
      });
    });
  });

  describe('decreasing quantity of items', () => {
    const initialState = {
      services: [{ ...firstItem, quantity: 2 }, { ...secondItem, quantity: 1 }],
      totalPrice: firstItem.price * 2 + secondItem.price,
      hasItems: true
    };

    it('removes item from the list', () => {
      expect(
        reducer(initialState, {
          type: actionTypes.REMOVE_FROM_CART,
          payload: secondItem.id
        })
      ).toEqual({
        ...initialState,
        services: [{ ...firstItem, quantity: 2 }],
        totalPrice: firstItem.price * 2
      });
    });

    it('decreases quantity of item in the list', () => {
      expect(
        reducer(initialState, {
          type: actionTypes.REMOVE_FROM_CART,
          payload: firstItem.id
        })
      ).toEqual({
        ...initialState,
        services: [
          { ...firstItem, quantity: 1 },
          { ...secondItem, quantity: 1 }
        ],
        totalPrice: firstItem.price + secondItem.price
      });
    });

    it('removes all items from the list', () => {
      const initialState = {
        services: [{ ...firstItem, quantity: 1 }],
        totalPrice: firstItem.price,
        hasItems: true
      };

      expect(
        reducer(initialState, {
          type: actionTypes.REMOVE_FROM_CART,
          payload: firstItem.id
        })
      ).toEqual({
        ...initialState,
        services: [],
        totalPrice: 0,
        hasItems: false
      });
    });
  });
});
