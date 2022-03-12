import React from 'react';

// styles
import styles from './Header.module.css';

// components
import Text from "../Text";
import SelectLanguage from "../../components/SelectLanguage";

function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.fullLogoWrap}>
                <Text text='Need.ua'/>
            </div>
            <SelectLanguage />
        </header>
    );
};

export default Header;
