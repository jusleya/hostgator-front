import { createActions, createReducer } from 'reduxsauce';

export const { Types: PlansType, Creators: PlansActions } = createActions({
  getPlans: ['payload'],
  getPlansSuccess: ['payload'],
  getPlansError: ['payload'],
});

const INITAL_STATE = {
  plans: [],
  error: false,
  loading: false,
};

const getPlans = (state = INITAL_STATE) => ({
  ...state,
  loading: true,
});

const getPlansSuccess = (state, payload) => ({
  ...state,
  loading: false,
  plans: payload.plans,
});

const getPlansError = (state = INITAL_STATE) => ({
  ...state,
  error: true,
  loading: false,
});

export default createReducer(INITAL_STATE, {
  [PlansType.GET_PLANS]: getPlans,
  [PlansType.GET_PLANS_SUCCESS]: getPlansSuccess,
  [PlansType.GET_PLANS_ERROR]: getPlansError,
});
