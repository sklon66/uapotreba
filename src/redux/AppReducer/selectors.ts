import { createSelector } from 'reselect';

// types
import { RootState } from '../rootReducer';

const selectApp = (state: RootState) => state.app;

const selectLanguage = createSelector(selectApp, (app) => app.language);
const selectData = createSelector(selectApp, (app) => app.data);

export {
    selectLanguage,
    selectData,
};
