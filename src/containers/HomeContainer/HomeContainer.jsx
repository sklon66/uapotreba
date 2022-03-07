import React from 'react';

// components
import Text from "../../components/Text";
import Table from "../../components/Table";
import FilterComponent from "../../components/FilterComponent";

// styles
import styles from './HomeContainer.module.css'



function HomeContainer () {
    const mocData = [
        {
            name: 'Чернігівська',
            criticality: 5,
            helpData: '4 (1)',
            onClick: () => console.log('Чернігівська click'),
        },
        {
            name: 'Харківська',
            criticality: 5,
            helpData: '10 (5)',
            onClick: () => console.log('Харківська click'),
        },
        {
            name: 'Київська',
            criticality: 4,
            helpData: '12',
            onClick: () => console.log('Київська click'),
        },
        {
            name: 'Херсонська',
            criticality: 3,
            helpData: '8',
            onClick: () => console.log('Херсонська click'),
        }
    ]
    return (
        <div>
            <Text text='Гуманітарна допомога в Україні' />
            <Text text='Області, що найбільше потребуть допомогу' />
            <div className={styles.container}>
                <div className={styles.filterContainer}>
                    <Text text='Потреби' />
                    <FilterComponent />
                </div>
                <div className={styles.tableContainer}>
                    <Table iterableData={mocData} withPagination/>
                </div>
            </div>
        </div>
    );
};

export default HomeContainer;
