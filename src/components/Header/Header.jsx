import React from 'react';

// styles
import styles from './Header.module.css';

// components
import Text from "../../components/Text";
import SelectLanguage from "../../components/SelectLanguage";

function Header () {
    return (
        <header className={styles.header}>
            <a className={styles.link} href='/'>
                <div className={styles.fullLogoWrap}>
                    <Text text='Need.ua'/>
                </div>
            </a>

            <SelectLanguage />
        </header>
    );
};

export default Header;
