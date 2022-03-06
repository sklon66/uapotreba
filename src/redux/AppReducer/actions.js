import {
    SET_LANGUAGE,
    SET_DATA
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