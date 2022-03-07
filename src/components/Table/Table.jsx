import React from 'react';

// styles
import styles from './Table.module.css'

// components
import TableRow from "../../components/TableRow";
import Pagination from "../../components/Pagination";

function Table ({iterableData, withPagination}) {
    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableBody}>
                <div className={styles.rows}>
                    {
                        iterableData?.map((row, index) => {
                            return (
                                <TableRow key={index} name={row.name} criticality={row.criticality} helpData={row.helpData} onClick={row.onClick} />
                            )
                        })
                    }
                </div>
            </div>
            {
                withPagination && <Pagination />
            }

        </div>
    );
}

export default Table;
