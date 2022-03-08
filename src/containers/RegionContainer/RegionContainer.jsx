import React from 'react';

// styles
import styles from "../HomeContainer/HomeContainer.module.css";

// components
import Text from "../../components/Text";
import Checklist from "../../components/Checklist";
import Table from "../../components/Table";
import {useSelector} from "react-redux";

// selector
import {selectData} from "../../redux/AppReducer/selectors";

function RegionContainer () {
    const data = useSelector(selectData);
    return (
        <div className={styles.container}>
            <div className={styles.filterContainer}>
                <Text text='Потреби' />
                <Checklist />
            </div>
            <div className={styles.tableContainer}>
                <Table iterableData={data} withPagination/>
            </div>
        </div>
    );
};

export default RegionContainer;
