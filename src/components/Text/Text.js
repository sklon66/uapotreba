import React from 'react';

// locales
import { KEYS_EN } from "../../locales/translationEn";
import { KEYS_UA } from "../../locales/translationUa";

// styles
import styles from './Text.module.css'

function Text({text, language}) {
    const translated = language === 'ua' ? KEYS_UA[text] : KEYS_EN[text]

    return <p className={styles.textStyle}>{translated ? translated : text}</p>;
}

export default Text;
