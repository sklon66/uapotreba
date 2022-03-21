import React from 'react';

// styles
import styles from './Table.module.css'

// components
import TableRow from "../../components/TableRow";


function Table ({iterableData, onRowClick, isClick, withContact}) {
    const checkIsRealValue = (value) => {
        if (typeof value != 'undefined') {return value}else return false
    }


    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableBody}>
                <div className={styles.rows}>
                    {
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
                                    rowClick={() => onRowClick(row?.region || row?.name)}
                                />
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
