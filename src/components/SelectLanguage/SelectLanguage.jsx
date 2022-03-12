import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

//redux
import { selectLanguage } from "../../redux/AppReducer/selectors";
import { setLanguage as setLanguageRedux} from "../../redux/AppReducer/actions";

//constants
import { LANGUAGES_LIST } from "../../constants/constants";

// styles
import styles from './SelectLanguage.module.css';

function SelectLanguage () {
    const dispatch = useDispatch();
    const lang = useSelector(selectLanguage)

    const [language, setLanguage] = useState(lang);

    const updateHotLanguage = event => {
        dispatch(setLanguageRedux(event.target.value))
        setLanguage(event.target.value);
    };

    return (
        <div>
            <select className={styles.select} value={language} onChange={updateHotLanguage} id="languages">
                {LANGUAGES_LIST.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                        {lang.emoji}{' '}{lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default SelectLanguage;
