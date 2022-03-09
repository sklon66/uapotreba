import React from 'react';
import {useSelector} from "react-redux";

// styles
import styles from "../HomeContainer/HomeContainer.module.css";

// components
import Text from "../../components/Text";
import Checklist from "../../components/Checklist";
import Table from "../../components/Table";


// selector
import {selectCurrentRegion, selectData} from "../../redux/AppReducer/selectors";

function RegionContainer () {
    const currentRegion = useSelector(selectCurrentRegion)
    const data = useSelector(selectData);

    let regionData = [];

    data.forEach((item) => {
        if (item.region === currentRegion) regionData = item;
    })

    // const dataPrepearedForTable = regionData.map((item) => {
    //
    // })

    console.log()

    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <Text text='Потреби' />
                <Checklist />
            </div>
            <div className={styles.tableContainer}>
                <Table iterableData={regionData.cities} withPagination/>
            </div>
        </div>
    );
};

export default RegionContainer;
