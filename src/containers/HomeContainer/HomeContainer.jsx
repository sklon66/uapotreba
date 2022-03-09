import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// components
import Text from "../../components/Text";
import Table from "../../components/Table";
import Checklist from "../../components/Checklist";

// styles
import styles from './HomeContainer.module.css'


// redux
import { selectData } from "../../redux/AppReducer/selectors";
import {setCurrentRegion} from "../../redux/AppReducer/actions";

// translation
import {KEYS_EN} from "../../locales/translationEn";

function HomeContainer () {
    const data = useSelector(selectData);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [sortedData, setSortedData] = useState(data);

    useEffect(()=> {
        const sorted = sortFromHighestToLowestPriority(data)
        setSortedData(sorted)
    },[data]);

    const sortFromHighestToLowestPriority = (array) => {
        return array?.sort((a, b) => {
            return b?.regionNeed - a?.regionNeed;
        });
    }

    const onRowClickHandler = (region) => {
        dispatch(setCurrentRegion(region));

        navigate(`/region-${KEYS_EN[region]}`);
    }

    return (
        <div>
            <div className={styles.titlesContainer}>
                <h1 className={styles.title}>
                    <Text text='humanitarian_help' />
                </h1>
                <h2 className={styles.subtitle}>
                    <Text text='regions_needs' />
                </h2>
            </div>
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    <div className={styles.filterHeading}>
                        <Text text='needs' />
                    </div>
                    <Checklist />
                </div>
                <div className={styles.tableContainer}>
                    <div className={styles.tableheading}>
                        <Text text='region'/>
                        <Text text='criticality'/>
                        <div>
                            <Text text='number_cities_towns'/>
                            <div className={styles.tableheadingRed}>
                                (<Text text='with_blockade'/>)
                            </div>
                        </div>
                    </div>
                    <Table iterableData={sortedData} withPagination onRowClick={onRowClickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
