import { all } from 'redux-saga/effects';

import * as productsSaga from './products/products.saga';

function* Sagas() {
  yield all([productsSaga.watchSagas()]);
}

export default Sagas;
