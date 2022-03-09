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
            <Text text='humanitarian_help' />
            <Text text='regions_needs' />
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    <Text text='needs' />
                    <Checklist />
                </div>
                <div className={styles.tableContainer}>
                    <Table iterableData={sortedData} withPagination onRowClick={onRowClickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
