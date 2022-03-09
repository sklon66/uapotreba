import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

// styles
import styles from "./RegionContainer.module.css";

// components
import Text from "../../components/Text";
import Checklist from "../../components/Checklist";
import Table from "../../components/Table";


// selector
import {selectCurrentRegion, selectData} from "../../redux/AppReducer/selectors";

// translate
import {KEYS_EN} from "../../locales/translationEn";
import {setCurrentCity} from "../../redux/AppReducer/actions";


function RegionContainer () {
    const currentRegion = useSelector(selectCurrentRegion)
    const data = useSelector(selectData);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let regionData = [];

    data.forEach((item) => {
        if (item.region === currentRegion) regionData = item;
    })

    const onRowClickHandler = (city) => {
        dispatch(setCurrentCity(city));

        navigate(`/city-${KEYS_EN[city]}`);
    }

    return (
        <div>
            <div className={styles.titlesContainer}>
                <h1 className={styles.title}>
                    <Text text={currentRegion} />
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
                    <Table iterableData={regionData.cities} withPagination perOneDayNeed onRowClick={onRowClickHandler}/>
                </div>
            </div>
        </div>
    );
};

export default RegionContainer;
