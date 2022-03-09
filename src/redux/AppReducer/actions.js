import {
    SET_LANGUAGE,
    SET_DATA,
    SET_PRODUCTS, SET_REGIONS, SET_ACTIVE_PRODUCTS,
    SET_CURRENT_REGION,
    SET_CURRENT_CITY,
} from './types';

export function setLanguage(language) {
    return {
        type: SET_LANGUAGE,
        payload: language,
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

export function setActiveProducts(activeProducts) {
    return {
        type: SET_ACTIVE_PRODUCTS,
        payload: activeProducts,
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
