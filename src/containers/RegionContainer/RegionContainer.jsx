import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";

// styles
import styles from "./RegionContainer.module.css";

// components
import Text from "../../components/Text";
import Checklist from "../../components/Checklist";
import Table from "../../components/Table";
import ContactBox from "../../components/ContactBox";

// translate
import { KEYS_EN } from "../../locales/translationEn";

// actions
import { setCurrentCity } from "../../redux/AppReducer/actions";

// helpers
import {filterByCategory, sortFromHighestToLowestPriorityByProperty} from "../../services/helpers";

// selectors
import { selectCurrentRegion, selectData} from "../../redux/AppReducer/selectors";

// services
import ScrollToTop from "../../services/ScrollToTop";


function RegionContainer () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const data = useSelector(selectData);
    const currentRegion = useSelector(selectCurrentRegion);

    const [sortedData, setSortedData] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('all');

    useEffect(() => {
        setSortedData(data?.find(val => val.region === currentRegion).cities)
        setCurrentCategory('all')
    },[])

    useEffect(() => {
        const dataFiltered = filterByCategory(data, currentCategory);

        const regionData = dataFiltered.find(val => val.region === currentRegion)

        const sorted = sortFromHighestToLowestPriorityByProperty(regionData.cities, 'cityNeed');

        setSortedData(sorted);
    },[currentCategory])

    const onRowClickHandler = (city) => {
        dispatch(setCurrentCity(city));

        navigate(`/city-${KEYS_EN[city]}`);
    }

    const goBackClickHandler = () => {
        navigate('/');
    }

    return (
        <div className={styles.regionContainer}>
            <ScrollToTop />
            <div className={styles.titlesContainer}>
                <h1 className={styles.title}>
                    <div className={styles.goBack} onClick={() => goBackClickHandler()}>
                        <Text text={'country'} />
                    </div>
                    <Text text={currentRegion} />
                </h1>
                <div className={styles.contactBoxWrapper}>
                    {/*<ContactBox title='regional_contacts' contactList={regionData?.contacts} />*/}
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    <div className={styles.filterHeading}>
                        <Text text='product_search' />
                    </div>
                    <Checklist setCurrentCategory={setCurrentCategory} />
                </div>
                <div className={styles.tableContainer}>
                    <div className={styles.tableHeadingDesktop}>
                        <Text text='city_town'/>
                        <Text text='criticality'/>
                        <Text text='1d_need'/>
                        <Text text='opt_need'/>
                    </div>
                    <div className={styles.tableHeadingMobile}>
                        <div className={styles.titleGroup}>
                            <Text text='city_town'/>
                            <Text text='criticality'/>
                        </div>
                        <div className={styles.titleGroup}>
                            <Text text='1d_need'/>
                            <Text text='opt_need'/>
                        </div>
                    </div>
                    <Table isClick iterableData={sortedData} withPagination onRowClick={onRowClickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default RegionContainer;
