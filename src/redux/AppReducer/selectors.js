import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

const selectLanguage = createSelector(selectApp, (app) => app.language);
const selectData = createSelector(selectApp, (app) => app.data);
const selectProducts = createSelector(selectApp, (app) => app.products);

export {
    selectLanguage,
    selectData,
    selectProducts
};
