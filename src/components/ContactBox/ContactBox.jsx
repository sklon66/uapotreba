import React from 'react';

// styles
import styles from './ContactBox.module.css'

// components
import Text from "../../components/Text";

function ContactBox ({title, contactList}) {

    return (
        <div className={styles.contacBox}>
            <div className={styles.textWrapper}>
                <Text h3 text={title}/>
            </div>
            <div className={styles.contactList}>
                {
                    contactList?.phone_VCA != undefined && (
                        <div className={styles.contactRow}>
                            <Text text={'phone_vca'} />
                            <a className={styles.link} target='_blank' href={`tel:${contactList?.phone_VCA}`}> {contactList?.phone_VCA} </a>
                        </div>
                    )
                }
                {
                    contactList?.hum_center != undefined && (
                        <div className={styles.contactRow}>
                            <Text text={'hum'} />
                            <a className={styles.link} target='_blank' href={`tel:${contactList?.hum_center}`}> {contactList?.hum_center} </a>
                        </div>
                    )
                }
                {
                    contactList?.red_cross != undefined && (
                        <div className={styles.contactRow}>
                            <Text text={'red_cross'} />
                            <a className={styles.link} target='_blank' href={`tel:${contactList?.red_cross}`}> {contactList?.red_cross} </a>
                        </div>
                    )
                }
                {
                    contactList?.telegram_VCA != undefined && (
                        <div className={styles.contactRow}>
                            <Text text={'vca_telegram'} />
                            <a className={styles.link} target='_blank' href={contactList?.telegram_VCA}> {contactList?.telegram_VCA} </a>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default ContactBox;
