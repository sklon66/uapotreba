import React from 'react';

// styles
import styles from './About.module.css'

// img
import about from './img/about.webp'

// components
import Text from "../../components/Text";

function About () {
    return (
        <div className={styles.aboutBox}>
            <Text text='Про проект'/>
            <div className={styles.contentWrapper}>
                <div className={styles.textWrapper}>
                    <Text text='Група волонтерів разом з однією з найбільших торговельних мереж України створила платформу, на якій відображена оцінка потреби населення в продуктах, пріоритет такої потреби та усі корисні контакти!'/>
                    <Text text='Якщо ви організація, штаб, волонтерська група, підприємство, яке займається допомогою продуктами та іншими товарами по Україні - ця платформа для вас!'/>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={about} alt='about' />
                </div>
            </div>

        </div>
    );
};

export default About;
