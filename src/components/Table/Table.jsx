import React, {useEffect, useState} from 'react';

// styles
import styles from './Table.module.css'


// constants
import { MAX_ROWS_PER_PAGE } from "../../constants/constants";

// components
import TableRow from "../../components/TableRow";
import Loader from "../../components/Loader";


function Table ({iterableData, withPagination, onRowClick, isClick, withContact}) {
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

    const checkIsRealValue = (value) => {
        if (typeof value != 'undefined') {return value}else return false
    }


    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableBody}>
                <div className={styles.rows}>
                    {
                        !iterableData ? <Loader /> :
                        iterableData?.map((row, index) => {
                            return (
                                <TableRow
                                    key={index}
                                    region={row?.region}
                                    product={row?.product}
                                    name={row?.name}
                                    criticality={row?.regionNeed || row?.cityNeed || row?.productNeed}
                                    cities={row?.cities}
                                    contact={row?.contacts?.phone_VCA || row?.contacts?.hum_center || row?.contacts?.red_cross}
                                    perOneDayNeed={checkIsRealValue(row?.regNeedVolume1D) || checkIsRealValue(row?.cityNeedVolume1D) || checkIsRealValue(row?.productNeedVolume1D)}
                                    optimalNeed={checkIsRealValue(row?.optRegNeedVolume) || checkIsRealValue(row?.optCityNeedVolume) || checkIsRealValue(row?.optProductNeedVolume)}
                                    isClick={isClick}
                                    withContact={withContact}
                                    rowClick={() => onRowClick(row?.region || row?.name)}/>
                            )
                        })
                    }
                </div>
            </div>
            {/*<Button text='more' onClick={addRowsPerPage}/>*/}
            {/*{*/}
            {/*    withPagination && <Pagination onPageButtonClick={findDiapasonPerPage} pageCount={iterableData?.length}/>*/}
            {/*}*/}

        </div>
    );
}

export default Table;
