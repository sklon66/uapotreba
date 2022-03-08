import React from 'react';

// styles
import styles from './Footer.module.css';

// components
import Text from "../Text";
import Logo from "../Logo";
import SelectLanguage from "../SelectLanguage";

function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={styles.topContent}>
                <div className={styles.fullLogoWrap}>
                    <div className={styles.logoWrap}>
                        <Logo />
                    </div>
                    <Text text='potreba'/>
                </div>
                <SelectLanguage />
            </div>
            <div className={styles.bottomContent}>
                <p className={styles.footerText}>Fozzi group</p>
                <a className={styles.phone} href="tel:+380 (073) 574 45 33">+380 (073) 574 45 33</a>
                <p className={styles.footerText}>2022</p>
            </div>
        </footer>
    );
};

export default Footer;
