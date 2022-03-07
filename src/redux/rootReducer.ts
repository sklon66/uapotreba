import { combineReducers } from 'redux';
import AppReducer from './AppReducer/reducer';

const rootReducer = combineReducers({
    app: AppReducer,
});

export default rootReducer;
