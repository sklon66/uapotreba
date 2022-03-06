import {
    SET_LANGUAGE,
    SET_DATA
} from './types';

const initialState = {
    language: localStorage.getItem('language') ? localStorage.getItem('language') : 'ua',
    data: localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : null,
};

const ThankYouReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LANGUAGE:
            return { ...state, language: action.payload };
        case SET_DATA:
            return { ...state, data: action.payload };
        default:
            return state;
    }
};

export default ThankYouReducer;
