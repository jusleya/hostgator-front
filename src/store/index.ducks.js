import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import plansReducer from './plans/plans.duck';

const appReducer = (history) => {
  const reducers = {
    router: connectRouter(history),
    plansReducer,
  };

  return combineReducers(reducers);
};

const Reducers = (history) => appReducer(history);

export default Reducers;
