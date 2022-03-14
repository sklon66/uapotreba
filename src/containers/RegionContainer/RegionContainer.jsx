import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// styles
import styles from "./RegionContainer.module.css";

// components
import Text from "../../components/Text";
import Checklist from "../../components/Checklist";
import Table from "../../components/Table";
import ContactBox from "../../components/ContactBox";

// selectors
import { selectActiveProduct, selectCurrentRegion, selectData } from "../../redux/AppReducer/selectors";

// translate
import { KEYS_EN } from "../../locales/translationEn";

// actions
import { setCurrentCity } from "../../redux/AppReducer/actions";

import { sortFromHighestToLowestPriorityByProperty } from "../../services/helpers";


function RegionContainer () {
    const currentRegion = useSelector(selectCurrentRegion)
    const data = useSelector(selectData);
    const activeProduct = useSelector(selectActiveProduct);

    const [sortedData, setSortedData] = useState([]);
    const [regionData, setRegionData] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(()=>{
        data?.forEach((item) => {
            if (item.region === currentRegion) {
                setRegionData(item)
            }
        })
    },[data]);


    useEffect(() => {
        const sorted = sortFromHighestToLowestPriorityByProperty(regionData?.cities, 'cityNeed');
        setSortedData(sorted);

    },[regionData]);

    const onRowClickHandler = (city) => {
        dispatch(setCurrentCity(city));

        navigate(`/city-${KEYS_EN[city]}`);
    }

    return (
        <div className={styles.regionContainer}>
            <div className={styles.titlesContainer}>
                <h1 className={styles.title}>
                    <Text text={currentRegion} />
                </h1>
                <div className={styles.contactBoxWrapper}>
                    <ContactBox title='regional_contacts' contactList={regionData?.contacts} />
                </div>
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
                        <Text text='city_town'/>
                        <Text text='criticality'/>
                        <Text text='1d_need'/>
                        <Text text='opt_need'/>
                    </div>
                    <Table isClick iterableData={sortedData} withPagination onRowClick={onRowClickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default RegionContainer;
