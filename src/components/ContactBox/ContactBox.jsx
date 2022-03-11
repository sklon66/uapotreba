import React from 'react';

// styles
import styles from './ContactBox.module.css'
import Text from "../Text";

function ContactBox ({title, contactList}) {

    console.log('contactList', contactList)
    return (
        <div className={styles.contacBox}>
            <Text text={title}/>
            <div className={styles.contactList}>
                {
                    contactList?.map((contact) => {
                        return <a href={`tel:${contact.phoneNumber}`}> {contact.phoneNumber} </a>
                    })
                }
            </div>
        </div>
    );
};

export default ContactBox;
