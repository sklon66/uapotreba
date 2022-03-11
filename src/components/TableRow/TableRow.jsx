import React, { useEffect, useState } from 'react';

// styles
import styles from './TableRow.module.css'

// components
import Text from "../Text";
import CriticalIndicator from "../CriticalIndicator";

function TableRow ({region, product, name, criticality, cities, contact, perOneDayNeed, rowClick}) {

    const [blockedCities, setBlockedCities] = useState([]);

    useEffect(() => {
        const blocked = cities?.filter(city => city.blocked === 'blocked')
        setBlockedCities(blocked?.length);
    },[cities])

    const onClickHandler = () => {
        rowClick?.();
    }

    console.log('criticality', criticality)

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
            {/*{*/}
            {/*    !!contact && (*/}
            {/*        <div className={styles.contact}>*/}
            {/*            <Text text={contact}/>*/}
            {/*        </div>*/}
            {/*    )*/}
            {/*}*/}
            {
                perOneDayNeed && (
                    <div className={styles.perOneDayNeed}>
                        <Text text={perOneDayNeed}/>
                    </div>
                )
            }
            {
                rowClick && <div className={styles.arrow}>></div>
            }
        </div>
    );
}

export default TableRow;
