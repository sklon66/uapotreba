import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

// styles
import styles from "../HomeContainer/HomeContainer.module.css";

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
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <Text text='Потреби' />
                <Checklist />
            </div>
            <div className={styles.tableContainer}>
                <Table iterableData={regionData.cities} withPagination onRowClick={onRowClickHandler}/>
            </div>
        </div>
    );
};

export default RegionContainer;
