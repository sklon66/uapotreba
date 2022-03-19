import { takeLatest, select } from 'redux-saga/effects';

import { SET_ACTIVE_PRODUCT } from '../AppReducer/types';
import { selectActiveProduct } from '../AppReducer/selectors';

function* setActiveProduct() {
    try {
        const product = yield select(selectActiveProduct);

    } catch (error) {
        console.error(error)
    }
}

export const setProductName = function* () {
    yield takeLatest(SET_ACTIVE_PRODUCT, setActiveProduct);
};
