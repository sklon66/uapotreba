import React from 'react';

// styles
import styles from './TableRow.module.css'

// components
import Text from "../Text";
import CriticalIndicator from "../CriticalIndicator";

function TableRow ({onClick, name, criticality, helpData, contact}) {

    const onClickHandler = () => {
        onClick?.();
    }

    return (
        <div className={styles.rowBody} onClick={onClickHandler}>
            <div className={styles.name}>
                <Text text={name}/>
            </div>
            <div className={styles.criticality}>
                <CriticalIndicator level={criticality}/>
            </div>
            <div className={styles.helpData}>
                <Text text={helpData}/>
            </div>
            <div className={styles.contact}>
                <Text text={contact}/>
            </div>
            {
                onClick && <div className={styles.arrow}>></div>
            }
        </div>
    );
}

export default TableRow;
