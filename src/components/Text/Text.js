import React from 'react';
import {useSelector} from "react-redux";
import classNames from "classnames/bind";

// locales
import { KEYS_EN } from "../../locales/translationEn";
import { KEYS_UA } from "../../locales/translationUa";

// styles
import styles from './Text.module.css'

//redux
import {selectLanguage} from "../../redux/AppReducer/selectors";


function Text({text, h3}) {
    const language = useSelector(selectLanguage);

    const translated = language === 'ua' ? KEYS_UA[text] : KEYS_EN[text]

    const cx = classNames.bind(styles)
    const textClasses = cx({
        textStyle: true,
        h3,
    })

    return <span className={textClasses}>{translated ? translated : text}</span>;
}

export default Text;
