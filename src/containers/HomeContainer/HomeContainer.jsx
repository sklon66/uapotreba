import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";

// components
import Text from "../../components/Text";
import Table from "../../components/Table";
import Checklist from "../../components/Checklist";

// styles
import styles from './HomeContainer.module.css'

//helpers
import {handleRegionClick} from "../../services/helpers";

function HomeContainer () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const mocData = [
        {
            name: 'Чернігівська',
            criticality: 5,
            helpData: '4 (1)',
            onClick: () => handleRegionClick('Чернігівська', dispatch, navigate),
        },
        {
            name: 'Харківська',
            criticality: 5,
            helpData: '10 (5)',
            onClick: () => handleRegionClick('Харківська', dispatch, navigate),
        },
        {
            name: 'Київська',
            criticality: 4,
            helpData: '12',
            onClick: () => handleRegionClick('Київська', dispatch, navigate),
        },
        {
            name: 'Херсонська',
            criticality: 3,
            helpData: '8',
            onClick: () => handleRegionClick('Херсонська', dispatch, navigate),
        }
    ]
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
                    <Table iterableData={mocData} withPagination/>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
