import React, { useEffect, useState } from 'react';

// styles
import styles from './TableRow.module.css'

// components
import Text from "../Text";
import CriticalIndicator from "../CriticalIndicator";

function TableRow ({onClick, name, criticality, cities, contact}) {

    const [blockedCities, setBlockedCities] = useState([]);

    useEffect(() => {
        const blocked = cities?.filter(city => city.blocked === 'blocked')
        setBlockedCities(blocked?.length);
    },[cities])

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
            <div className={styles.cities}>
                <Text text={cities?.length}/>
                <span>
                  <Text text={blockedCities}/>
                </span>
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
