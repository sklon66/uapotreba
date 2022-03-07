import {
    SET_LANGUAGE,
    SET_DATA, SET_PRODUCTS, SET_REGIONS
} from './types';

const initialState = {
    language: localStorage.getItem('language') || 'ua',
    data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null,
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, language: action.payload };
        case SET_DATA:
            return { ...state, data: action.payload };
        case SET_PRODUCTS:
            return { ...state, products: action.payload };
        case SET_REGIONS:
            return { ...state, regions: action.payload };
        default:
            return state;
    }
};

export default AppReducer;
