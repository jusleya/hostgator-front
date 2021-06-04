import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import productsReducer from './products/products.duck';

const appReducer = (history) => {
  const reducers = {
    router: connectRouter(history),
    productsReducer,
  };

  return combineReducers(reducers);
};

const Reducers = (history) => appReducer(history);

export default Reducers;
