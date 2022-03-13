import { createSelector } from 'reselect';

const selectApp = (state) => state.app;

const selectLanguage = createSelector(selectApp, (app) => app.language);
const selectData = createSelector(selectApp, (app) => app.data);
const selectProducts = createSelector(selectApp, (app) => app.products);
const selectCurrentRegion = createSelector(selectApp, (app) => app.currentRegion);
const selectCurrentCity = createSelector(selectApp, (app) => app.currentCity);
const selectActiveProduct = createSelector(selectApp, (app) => app.activeProduct);
const selectNeedsObject = createSelector(selectApp, (app) => app.needsObject);

export {
    selectLanguage,
    selectData,
    selectProducts,
    selectCurrentRegion,
    selectCurrentCity,
    selectActiveProduct,
    selectNeedsObject,
};
