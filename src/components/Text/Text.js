import React from 'react';
import {useSelector} from "react-redux";

// locales
import { KEYS_EN } from "../../locales/translationEn";
import { KEYS_UA } from "../../locales/translationUa";

// styles
import styles from './Text.module.css'

//redux
import {selectLanguage} from "../../redux/AppReducer/selectors";

function Text({text}) {
    const language = useSelector(selectLanguage);

    const translated = language === 'ua' ? KEYS_UA[text] : KEYS_EN[text]

    return <span className={styles.textStyle}>{translated ? translated : text}</span>;
}

export default Text;
