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
                                <TableRow key={index} name={row.region} criticality={row.regionNeed} cities={row.cities} onClick={row.onClick} />
                            )
                        })
                    }
                </div>
            </div>
            {
                withPagination && <Pagination pageCount={iterableData.length}/>
            }

        </div>
    );
}

export default Table;
