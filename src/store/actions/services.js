import * as actionTypes from './actionTypes';
import axios from '../../shared/axios-teorin';

export const setServices = services => {
  return {
    payload: services,
    type: actionTypes.SET_SERVICES
  };
};

export const initServices = () => {
  return dispatch => {
    axios
      .get('services.json')
      .then(response => {
        dispatch(setServices(response.data));
      })
      .catch();
  };
};
