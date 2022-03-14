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
            <Text text='about_project'/>
            <div className={styles.contentWrapper}>
                <div className={styles.textWrapper}>
                    <Text text='team_story'/>
                    <Text text='project_info'/>
                </div>
                <div className={styles.imageWrapper}>
                    <img src={about} alt='about' />
                </div>
            </div>

        </div>
    );
};

export default About;
