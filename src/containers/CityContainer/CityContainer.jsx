import React from 'react';
import { useSelector} from "react-redux";

// styles
import styles from "./CityContainer.module.css";

// components
import Text from "../../components/Text";
import Table from "../../components/Table";
import ContactBox from "../../components/ContactBox";

// redux
import {selectCurrentCity, selectCurrentRegion, selectData} from "../../redux/AppReducer/selectors";


function CityContainer () {
    const currentRegion = useSelector(selectCurrentRegion)
    const currentCity = useSelector(selectCurrentCity)
    const data = useSelector(selectData);


    let regionData = [];
    let cityData = [];

    data.forEach((item) => {
        if (item.region === currentRegion) regionData = item;
    })

    regionData.cities.forEach((item) => {
        if (item.name === currentCity) cityData = item;
    })

    return (
        <div className={styles.cityContainer}>
            <div className={styles.titlesContainer}>
                <h1 className={styles.title}>
                    <Text text={currentCity} />
                </h1>
                <div className={styles.contactBoxWrapper}>
                    <ContactBox title='Контакти по області' contactList={regionData?.contacts} />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.tableContainer}>
                    <div className={styles.tableheading}>
                        <Text text='продукт'/>
                        <Text text='criticality'/>
                        <div>
                            <Text text='Потреба на 1 день, т'/>
                        </div>
                        <div>
                            <Text text='Оптимальна потреба, т'/>
                        </div>
                    </div>
                    <Table iterableData={cityData.needs}/>
                </div>
            </div>
        </div>
    );
};

export default CityContainer;
