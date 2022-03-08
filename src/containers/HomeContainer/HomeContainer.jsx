import React from 'react';

// components
import Text from "../../components/Text";
import Table from "../../components/Table";
import Checklist from "../../components/Checklist";

// styles
import styles from './HomeContainer.module.css'
import { useSelector } from "react-redux";
import { selectData } from "../../redux/AppReducer/selectors";

function HomeContainer () {
    const data = useSelector(selectData);

    return (
        <div>
            <Text text='Гуманітарна допомога в Україні' />
            <Text text='Області, що найбільше потребуть допомогу' />
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    <Text text='Потреби' />
                    <Checklist />
                </div>
                <div className={styles.tableContainer}>
                    <Table iterableData={data} withPagination/>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
