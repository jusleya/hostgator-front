import { createActions, createReducer } from 'reduxsauce';

export const { Types: ProductsType, Creators: ProductsActions } = createActions({
  getProducts: ['payload'],
  getProductsSuccess: ['payload'],
  getProductsError: ['payload'],
});

const INITAL_STATE = {
  products: [],
  error: false,
  loading: false,
};

const getProducts = (state = INITAL_STATE) => ({
  ...state,
  loading: true,
});

const getProductsSuccess = (state, payload) => ({
  ...state,
  loading: false,
  products: payload.products.data.shared.products,
});

const getProductsError = (state = INITAL_STATE) => ({
  ...state,
  error: true,
  loading: false,
});

export default createReducer(INITAL_STATE, {
  [ProductsType.GET_PRODUCTS]: getProducts,
  [ProductsType.GET_PRODUCTS_SUCCESS]: getProductsSuccess,
  [ProductsType.GET_PRODUCTS_ERROR]: getProductsError,
});
