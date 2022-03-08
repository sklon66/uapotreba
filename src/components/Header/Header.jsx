import React from 'react';

// styles
import styles from './Header.module.css';

// components
import Text from "../Text";
import Logo from "../Logo";

function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.logoWrap}>
                <Logo />
            </div>
            <Text text='Потреба'/>
        </header>
    );
};

export default Header;
