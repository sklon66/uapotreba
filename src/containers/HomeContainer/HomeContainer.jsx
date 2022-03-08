import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

// components
import Text from "../../components/Text";
import Table from "../../components/Table";
import Checklist from "../../components/Checklist";

// styles
import styles from './HomeContainer.module.css'
import { useSelector } from "react-redux";
import { selectData } from "../../redux/AppReducer/selectors";

//helpers
import {handleRegionClick} from "../../services/helpers";

function HomeContainer () {
    const data = useSelector(selectData);

    return (
        <div>
            <Text text='humanitarian_help' />
            <Text text='regions_needs' />
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    <Text text='needs' />
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
