import {
    SET_LANGUAGE,
    SET_DATA,
    SET_PRODUCTS, SET_REGIONS, SET_CURRENT_REGION,
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