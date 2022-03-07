import React from 'react';

import { KEYS_EN } from "../../locales/translationEn";
import { KEYS_UA } from "../../locales/translationUa";

function Text({text='criticality', language}) {

    const translated = language === 'ua' ? KEYS_UA[text] : KEYS_EN[text]
    console.log('try to catch me run dirty')
    return <p>{translated}</p>;
}

export default Text;
