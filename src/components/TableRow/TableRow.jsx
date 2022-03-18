import React, { useEffect, useState } from 'react';

// styles
import styles from './TableRow.module.css'

// components
import Text from "../Text";
import CriticalIndicator from "../CriticalIndicator";
import {getTranslate} from "../../services/helpers";
import {useSelector} from "react-redux";
import {selectLanguage} from "../../redux/AppReducer/selectors";

function TableRow ({region, product, name, criticality, cities, contact, perOneDayNeed, optimalNeed, rowClick, isClick, withContact}) {

    const [blockedCities, setBlockedCities] = useState([]);

    const language = useSelector(selectLanguage);

    useEffect(() => {
        const blocked = cities?.filter(city => city.blocked === 'blocked')
        setBlockedCities(blocked?.length);
    },[cities])

    const onClickHandler = () => {
        rowClick?.();
    }

    const getFirstLetter = (string) => {
        return getTranslate(string, language)[0]
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
                    perOneDayNeed != undefined && (
                        <div className={styles.perOneDayNeed}>
                            <Text text={Math.round(+perOneDayNeed)}/>
                        </div>
                    )
                }
                {
                    optimalNeed != undefined && (
                        <div className={styles.optimalNeed}>
                            <Text text={Math.round(+optimalNeed)}/>
                        </div>
                    )
                }
                {
                    withContact != undefined && (
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
                    <div className={styles.nameWrapper}>
                        <Text text={region || name || product}/>
                        <div className={styles.nameGhost}>
                            <Text text={getFirstLetter(region || name || product)}/>
                        </div>
                    </div>
                    <div className={styles.tonsWrapper}>
                        {
                            perOneDayNeed && (
                                <div className={styles.perOneDayNeed}>
                                    <Text text='per_one_day'/>
                                    <div>
                                        <Text text={Math.round(+perOneDayNeed)}/>{' '}<Text text='t'/>
                                    </div>
                                </div>
                            )
                        }
                        <div className={styles.hr}/>
                        {
                            optimalNeed && (
                                <div className={styles.optimalNeed}>
                                    <Text text='optimal'/>
                                    <div>
                                        <Text text={Math.round(+optimalNeed)}/>{' '}<Text text='t'/>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <CriticalIndicator level={criticality}/>
            </div>
        </>
    );
}

export default TableRow;
