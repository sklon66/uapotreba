import {
    SET_LANGUAGE,
    SET_DATA, SET_PRODUCTS, SET_REGIONS, SET_ACTIVE_PRODUCTS
} from './types';

// constants
import { PRODUCTS_LIST, REGIONS_LIST } from "../../constants/constants";

const initialState = {
    language: localStorage.getItem('language') || 'ua',
    data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null,
    products: PRODUCTS_LIST,
    regions: REGIONS_LIST,
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, language: action.payload };
        case SET_DATA:
            return { ...state, data: action.payload };
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        case SET_ACTIVE_PRODUCTS:
            return { ...state, activeProducts: action.payload };
        case SET_REGIONS:
            return { ...state, regions: action.payload };
        default:
            return state;
    }
};

export default AppReducer;
