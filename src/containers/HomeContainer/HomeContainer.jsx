import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

// components
import Text from "../../components/Text";
import Table from "../../components/Table";
import Checklist from "../../components/Checklist";
import Legend from "../../components/Legend";
import About from "../../components/About";

// styles
import styles from './HomeContainer.module.css'

// redux
import { setCurrentRegion } from "../../redux/AppReducer/actions";
import { selectActiveProduct, selectData, selectNeedsObject } from "../../redux/AppReducer/selectors";

// translation
import {KEYS_EN} from "../../locales/translationEn";

// img
import dots from "../../assets/img/dots.svg"

// helpers
import { sortFromHighestToLowestPriorityByProperty } from "../../services/helpers";

function HomeContainer () {
    const data = useSelector(selectData);
    const activeProduct = useSelector(selectActiveProduct);
    const needsObject = useSelector(selectNeedsObject);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [sortedData, setSortedData] = useState(data);

    useEffect(() => {
        if (activeProduct === 'all') {
            const sorted = sortFromHighestToLowestPriorityByProperty(data, 'regionNeed');
            setSortedData(sorted);
        } else {
            const regionObjectWithNeeds = data.map((item, i) => Object.assign({}, item, needsObject[i]));
            console.log('regionObjectWithNeeds', regionObjectWithNeeds)
            setSortedData(regionObjectWithNeeds)
        }
    },[data, activeProduct, needsObject]);


    const onRowClickHandler = (region) => {
        dispatch(setCurrentRegion(region));

        navigate(`/region-${KEYS_EN[region]}`);
    }

    return (
        <>
            <Legend/>

            <div className={styles.homeContainer}>
                <div className={styles.titlesContainer}>
                    <h1 className={styles.title}>
                        <Text text='humanitarian_help' />
                    </h1>
                    <h4 className={styles.disclaimer}>
                        <Text text='about_service' />
                    </h4>
                    <h2 className={styles.subtitle}>
                        <Text text='regions_needs' />
                    </h2>
                    <p className={styles.subtitleDisclaimer}>
                        <img className={styles.disclaimerDots} alt='dots' src={dots}/>
                        <Text text='criticality_lev'/>
                    </p>
                </div>
                <div className={styles.container}>
                    <div className={styles.filterContainer}>
                        <div className={styles.filterHeading}>
                            <Text text='product_search' />
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
                            <Text text='Потреба на 1 день, т'/>
                            <Text text='Оптмальна потреба, т'/>
                            <Text text='Контакт'/>
                        </div>
                        <Table withContact isClick iterableData={sortedData} withPagination onRowClick={onRowClickHandler}/>
                    </div>
                </div>
                <About />
            </div>
        </>

    );
};

export default HomeContainer;
