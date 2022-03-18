// locales
import { KEYS_EN } from "../locales/translationEn";
import { KEYS_UA } from "../locales/translationUa";

// redux
import {useSelector} from "react-redux";
import {selectLanguage} from "../redux/AppReducer/selectors";



export const sortFromHighestToLowestPriorityByProperty = (array, property) => {
    return array?.sort(function (a, b) {
        return a[property] - b[property];
    });
}


export const getTranslate = (text, language) => {
    const translated = language === 'ua' ? KEYS_UA[text] : KEYS_EN[text]

    return translated
}
