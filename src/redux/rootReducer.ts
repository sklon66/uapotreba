import { combineReducers } from 'redux';
import AppReducer from './AppReducer/reducer';

const rootReducer = combineReducers({
    app: AppReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
