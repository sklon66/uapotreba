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
import { selectData} from "../../redux/AppReducer/selectors";
import { setCurrentRegion } from "../../redux/AppReducer/actions";

// translation
import {KEYS_EN} from "../../locales/translationEn";

// img
import dots from "../../assets/img/dots.svg"

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
            return a?.regionNeed - b?.regionNeed;
        });
    }

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
                        <div className={styles.tableHeadingDesktop}>
                            <Text text='region'/>
                            <Text text='criticality'/>
                            <Text text='Потреба на 1 день, т'/>
                            <Text text='Оптмальна потреба, т'/>
                            <Text text='Контакт'/>
                        </div>
                        <div className={styles.tableHeadingMobile}>
                            <div className={styles.titleGroup}>
                                <Text text='region'/>
                                <Text text='criticality'/>
                            </div>
                            <div className={styles.titleGroup}>
                                <Text text='Потреба на 1 день, т'/>
                                <Text text='Оптмальна потреба, т'/>
                            </div>
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
