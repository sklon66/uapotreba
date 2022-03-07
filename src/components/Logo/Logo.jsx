import React from 'react';

// styles
import styles from "./Logo.module.css";

// images
import logo from "../../assets/img/logo.png";

function Logo () {
    return (
        <div className={styles.logoContainer}>
            <img src={logo} alt='potrebaUa' className={styles.logoImage}/>
        </div>
    );
};

export default Logo;
