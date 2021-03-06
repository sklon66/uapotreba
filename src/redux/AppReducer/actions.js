import {
    SET_LANGUAGE,
    SET_DATA,
    SET_PRODUCTS, SET_REGIONS, SET_ACTIVE_PRODUCT,
    SET_CURRENT_REGION,
    SET_CURRENT_CITY, SET_NEEDS_OBJECT,
    SET_LOADER
} from './types';

export function setLanguage(language) {
    return {
        type: SET_LANGUAGE,
        payload: language,
    };
}

export function setLoader(state) {
    return {
        type: SET_LOADER,
        payload: state,
    };
}

export function setData(platform) {
    return {
        type: SET_DATA,
        payload: platform,
    };
}

export function setProducts(products) {
    return {
        type: SET_PRODUCTS,
        payload: products,
    };
}

export function setActiveProduct(activeProduct) {
    return {
        type: SET_ACTIVE_PRODUCT,
        payload: activeProduct,
    };
}

export function setRegions(regions) {
    return {
        type: SET_REGIONS,
        payload: regions,
    };
}

export function setCurrentRegion(currentRegion) {
    return {
        type: SET_CURRENT_REGION,
        payload: currentRegion,
    };
}

export function setCurrentCity(currentCity) {
    return {
        type: SET_CURRENT_CITY,
        payload: currentCity,
    };
}

export function setNeedsObject(needsObj) {
    return {
        type: SET_NEEDS_OBJECT,
        payload: needsObj,
    };
}
