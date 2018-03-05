import * as actionTypes from '../actions/actionTypes';

const initialState = {
  services: []
};

const convertToArray = objectData => {
  const result = [];
  for (let prop in objectData) {
    result.push({
      ...objectData[prop],
      id: prop
    });
  }
  return result;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SERVICES:
      return {
        ...state,
        services: convertToArray(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
