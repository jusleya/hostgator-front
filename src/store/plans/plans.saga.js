import { takeLatest, put } from 'redux-saga/effects';
import { PlansType } from './plans.duck';
import { GET } from '../../constants/verbs';
import { PRICES } from '../../constants/endpoints';
import api from '../../services/api';

export function* getPlans() {
  try {
    const productsOBJ = yield api({
      method: GET,
      url: PRICES,
    });
    const obj = productsOBJ.data.shared.products;
    const products = Object.keys(obj).map((product) => [obj[product]]);
    const plans = products.filter((product) => product[0].name === 'Plano P' || product[0].name === 'Plano M' || product[0].name === 'Plano Turbo');

    yield put({ plans, type: PlansType.GET_PLANS_SUCCESS });
  } catch {
    yield put({ type: PlansType.GET_PLANS_ERROR });
  }
}

export function* watchSagas() {
  yield takeLatest(PlansType.GET_PLANS, getPlans);
}
