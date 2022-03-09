import React from 'react';
import styles from "../HomeContainer/HomeContainer.module.css";
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

    console.log('regionData', regionData)

    regionData.cities.forEach((item) => {
        console.log('item -0-', item.needs)
        if (item.name === currentCity) cityData = item;
    })

    console.log('regionData', regionData)

    console.log('cityData', cityData)

    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <Text text='Потреби' />
                <Checklist />
            </div>
            <div className={styles.tableContainer}>
                <Table iterableData={cityData.needs}/>
            </div>
        </div>
    );
};

export default CityContainer;
