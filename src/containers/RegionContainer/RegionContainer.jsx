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

// redux
import { selectCurrentRegion, selectData } from "../../redux/AppReducer/selectors";
import { setCurrentCity } from "../../redux/AppReducer/actions";

// translate
import { KEYS_EN } from "../../locales/translationEn";

function RegionContainer () {
    const currentRegion = useSelector(selectCurrentRegion)
    const data = useSelector(selectData);

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
        const sorted = sortFromHighestToLowestPriority(regionData?.cities)
        setSortedData(sorted)
    },[regionData]);

    const sortFromHighestToLowestPriority = (array) => {
        return array?.sort((a, b) => {
            return a?.cityNeed - b?.cityNeed;
        });
    }

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
                    <ContactBox title='Контакти по області' contactList={regionData?.contacts} />
                </div>
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
                        <Text text='city_town'/>
                        <Text text='criticality'/>
                        <Text text='Потреба на 1 день, т'/>
                        <Text text='Оптмальна потреба, т'/>
                    </div>
                    <Table isClick iterableData={sortedData} withPagination onRowClick={onRowClickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default RegionContainer;
