import React from 'react';
import classNames from "classnames/bind";

// styles
import styles from './CriticalIndicator.module.css';


function CriticalIndicator ({level}) {
    const cx = classNames.bind(styles)
    const criticalClasses = cx({
        criticalClasses: true,
        first: +level === 1,
        second: +level === 2,
        third: +level === 3,
        fourth: +level === 4,
        fifth: +level === 5,
    })

    return (
        <div className={criticalClasses}>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
        </div>
    );
};

export default CriticalIndicator;
