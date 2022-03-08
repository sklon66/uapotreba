import React, {useEffect, useState} from 'react';

// styles
import styles from './Table.module.css'


// constants
import { MAX_ROWS_PER_PAGE } from "../../constants/constants";

// components
import TableRow from "../../components/TableRow";
import Pagination from "../../components/Pagination";
import Button from "../../components/Button";

function Table ({iterableData, withPagination}) {

    const [maxRowsPerPage, setMaxRowsPerPage] = useState(MAX_ROWS_PER_PAGE);
    const [currentPage, setCurrentPage] = useState(2);
    const [rowsIndexToShow, setRowsIndexToShow] = useState(Array.from(Array(maxRowsPerPage).keys()));

    useEffect(() => {
        setRowsIndexToShow(Array.from(Array(maxRowsPerPage).keys()))

    },[maxRowsPerPage])

    const setPage = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    const addRowsPerPage = () => {
        setMaxRowsPerPage(maxRowsPerPage + MAX_ROWS_PER_PAGE )
    }

    const findDiapasonPerPage = (step) => {
        setPage(step)

        const items = Array.from(Array(iterableData.length).keys())
        const lastItemOfNewRange = +rowsIndexToShow.length * +currentPage;
        const firstItemOfNewRange = lastItemOfNewRange - +rowsIndexToShow.length;

        let targetRange = [];

        targetRange = items.slice(firstItemOfNewRange, lastItemOfNewRange)

        setRowsIndexToShow(targetRange)
    }

    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableBody}>
                <div className={styles.rows}>
                    {
                        iterableData?.map((row, index) => {
                            return (
                                index < maxRowsPerPage && <TableRow key={index} name={row.name} criticality={row.criticality} helpData={row.helpData} onClick={row.onClick} />
                            )
                        })
                    }
                </div>
            </div>
            <Button text='more' onClick={addRowsPerPage}/>
            {
                withPagination && <Pagination onPageButtonClick={findDiapasonPerPage} pageCount={iterableData.length} maxItemPerPage={maxRowsPerPage}/>
            }

        </div>
    );
}

export default Table;
