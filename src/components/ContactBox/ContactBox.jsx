import React from 'react';

// styles
import styles from './ContactBox.module.css'

// components
import Text from "../../components/Text";

function ContactBox ({title, contactList}) {

    // const isPhone = () => {
    //     const r = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;
    // }

    return (
        <div className={styles.contacBox}>
            <div className={styles.textWrapper}>
                <Text h3 text={title}/>
            </div>
            <div className={styles.contactList}>
                <a className={styles.link} target='_blank' href={`tel:${contactList?.phone_VCA}`}> {contactList?.phone_VCA} </a>
                <a className={styles.link} target='_blank' href={`tel:${contactList?.red_cross}`}> {contactList?.red_cross} </a>
                <a className={styles.link} target='_blank' href={contactList?.telegram_VCA}> {contactList?.telegram_VCA} </a>
            </div>
        </div>
    );
};

export default ContactBox;
