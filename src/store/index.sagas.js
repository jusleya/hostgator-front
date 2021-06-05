import { all } from 'redux-saga/effects';

import * as plansSaga from './plans/plans.saga';

function* Sagas() {
  yield all([plansSaga.watchSagas()]);
}

export default Sagas;
