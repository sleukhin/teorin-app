import { combineReducers } from 'redux';
import servicesReducer from './services';
import cartReducer from './cart';

const rootReducer = combineReducers({ servicesReducer, cartReducer });

export default rootReducer;
