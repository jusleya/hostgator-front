import { takeLatest, put } from 'redux-saga/effects';
import { ProductsType } from './products.duck';
import { GET } from '../../constants/verbs';
import { PRICES } from '../../constants/endpoints';
import api from '../../services/api';

export function* getProducts() {
  try {
    const products = yield api({
      method: GET,
      url: PRICES,
    });
    yield put({ products, type: ProductsType.GET_PRODUCTS_SUCCESS });
  } catch {
    yield put({ type: ProductsType.GET_PRODUCTS_ERROR });
  }
}

export function* watchSagas() {
  yield takeLatest(ProductsType.GET_PRODUCTS, getProducts);
}
