import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

const selectLanguage = createSelector(selectApp, (app) => app.language);
const selectData = createSelector(selectApp, (app) => app.data);

export {
    selectLanguage,
    selectData,
};
