import React from 'react';

// styles
import styles from './Legend.module.css'

// img
import pole from '../../assets/img/pole.webp'

function Legend () {
    return (
        <div className={styles.imgWrapper}>
            <img className={styles.img} alt='pole' src={pole}/>
        </div>
    );
};

export default Legend;
