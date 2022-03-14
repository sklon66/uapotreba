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
        <>
            <div className={styles.rowBodyDesktop} onClick={onClickHandler}>
                <div className={styles.name}>
                    <Text text={region || name || product}/>
                </div>
                <div className={styles.criticality}>
                    <CriticalIndicator level={criticality}/>
                </div>
                {
                    perOneDayNeed && (
                        <div className={styles.perOneDayNeed}>
                            <Text text={Math.round(+perOneDayNeed)}/>
                        </div>
                    )
                }
                {
                    optimalNeed && (
                        <div className={styles.optimalNeed}>
                            <Text text={Math.round(+optimalNeed)}/>
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
            <div className={styles.rowBodyMobile} onClick={onClickHandler}>
                <div className={styles.tableGroup}>
                    <Text text={region || product || name}/>
                    <CriticalIndicator level={criticality}/>
                </div>
                <div className={styles.tableGroup}>
                    <div className={styles.innerGroup}>
                        {
                            perOneDayNeed && (
                                <div className={styles.perOneDayNeed}>
                                    <Text text={Math.round(+perOneDayNeed)}/>
                                </div>
                            )
                        }
                        {
                            optimalNeed && (
                                <div className={styles.optimalNeed}>
                                    <Text text={Math.round(+optimalNeed)}/>
                                </div>
                            )
                        }
                    </div>
                    {
                        !!withContact && (
                            <div className={styles.contact}>
                                <a href={`tel:${contact}`}>{contact}</a>
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}

export default TableRow;
