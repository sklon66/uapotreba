import React, { useEffect, useState } from 'react';
import { useSelector} from "react-redux";

// styles
import styles from "./CityContainer.module.css";

// components
import Text from "../../components/Text";
import Table from "../../components/Table";
import ContactBox from "../../components/ContactBox";

// redux
import {selectCurrentCity, selectCurrentRegion, selectData} from "../../redux/AppReducer/selectors";
import { sortFromHighestToLowestPriorityByProperty } from "../../services/helpers";
import {KEYS_EN} from "../../locales/translationEn";
import {useNavigate} from "react-router-dom";


function CityContainer () {
    const navigate = useNavigate()

    const currentRegion = useSelector(selectCurrentRegion)
    const currentCity = useSelector(selectCurrentCity)
    const data = useSelector(selectData);

    const [sortedNeeds, setSortedNeeds] = useState([]);

    let regionData = [];
    let cityData = [];

    data.forEach((item) => {
        if (item.region === currentRegion) regionData = item;
    })

    regionData.cities.forEach((item) => {
        if (item.name === currentCity) cityData = item;
    })

    const goBackClickHandler = () => {
        navigate(`/region-${KEYS_EN[currentRegion]}`);
    }

    useEffect(()=>{
        const sorted = sortFromHighestToLowestPriorityByProperty(cityData?.needs, 'productNeed');
        setSortedNeeds(sorted)
    }, [cityData])


    return (
        <div className={styles.cityContainer}>
            <div className={styles.titlesContainer}>
                <h1 className={styles.title}>
                    <div className={styles.goBack} onClick={() => goBackClickHandler()}>
                        <Text text={currentRegion} />
                    </div>
                    <Text text={currentCity} />
                </h1>
                <div className={styles.contactBoxWrapper}>
                    <ContactBox title='regional_contacts' contactList={regionData?.contacts} />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.tableContainer}>
                    <div className={styles.tableHeadingDesktop}>
                        <Text text='product'/>
                        <Text text='criticality'/>
                        <div>
                            <Text text='1d_need'/>
                        </div>
                        <div>
                            <Text text='opt_need'/>
                        </div>
                    </div>
                    <div className={styles.tableHeadingMobile}>
                        <div className={styles.titleGroup}>
                            <Text text='product'/>
                            <Text text='criticality'/>
                        </div>
                        <div className={styles.titleGroup}>
                            <Text text='1d_need'/>
                            <Text text='opt_need'/>
                        </div>
                    </div>
                    <Table iterableData={sortedNeeds}/>
                </div>
            </div>
        </div>
    );
};

export default CityContainer;
