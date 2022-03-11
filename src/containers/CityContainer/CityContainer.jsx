import React from 'react';
import styles from "./CityContainer.module.css";
import Text from "../../components/Text";
import Checklist from "../../components/Checklist";
import Table from "../../components/Table";
import {useDispatch, useSelector} from "react-redux";
import {selectCurrentCity, selectCurrentRegion, selectData} from "../../redux/AppReducer/selectors";
import {useNavigate} from "react-router-dom";

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
        <div>
            <div className={styles.titlesContainer}>
                <h1 className={styles.title}>
                    <Text text={currentCity} />
                </h1>
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
                        <div>
                            <Text text='Залишок від норми на 5 днів, %'/>
                        </div>
                    </div>
                    <Table iterableData={cityData.needs}/>
                </div>
            </div>
        </div>
    );
};

export default CityContainer;
