import React from 'react';

import { KEYS_EN } from "../../locales/translationEn";
import { KEYS_UA } from "../../locales/translationUa";

function Text({text='criticality', language}) {

    console.log('zhopa');

    const translated = language === 'ua' ? KEYS_UA[text] : KEYS_EN[text]

    return <p>{translated}</p>;
}

export default Text;
