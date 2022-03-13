import { all, call } from 'redux-saga/effects';

import { setProductName } from './product';


export default function* rootSaga() {
    yield call(setProductName);
}
