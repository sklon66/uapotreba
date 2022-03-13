import React, { useEffect, useState } from 'react';

// styles
import styles from './TableRow.module.css'

// components
import Text from "../Text";
import CriticalIndicator from "../CriticalIndicator";

function TableRow ({region, product, name, criticality, cities, contact, perOneDayNeed, optimalNeed, rowClick, isClick, withContact}) {

    const [blockedCities, setBlockedCities] = useState([]);

    useEffect(() => {
        const blocked = cities?.filter(city => city.blocked === 'blocked')
        setBlockedCities(blocked?.length);
    },[cities])

    const onClickHandler = () => {
        rowClick?.();
    }

    return (
        <div className={styles.rowBody} onClick={onClickHandler}>
            <div className={styles.name}>
                <Text text={region || product || name}/>
            </div>
            <div className={styles.criticality}>
                <CriticalIndicator level={criticality}/>
            </div>
            {
                !!cities && (
                    <div className={styles.cities}>
                        <Text text={cities?.length}/>
                        <div className={styles.red}>
                          (<Text text={blockedCities}/>)
                        </div>
                    </div>
                )
            }
            {
                perOneDayNeed && (
                    <div className={styles.perOneDayNeed}>
                        <Text text={perOneDayNeed}/>
                    </div>
                )
            }
            {
                optimalNeed && (
                    <div className={styles.optimalNeed}>
                        <Text text={optimalNeed}/>
                    </div>
                )
            }
            {
                !!withContact && (
                    <div className={styles.contact}>
                        <a href={`tel:${contact}`}>{contact}</a>
                    </div>
                )
            }

            {
                (isClick && !!rowClick) && <div className={styles.arrow}>></div>
            }
        </div>
    );
}

export default TableRow;
