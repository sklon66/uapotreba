import React from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// styles
import styles from './Table.module.css'

// components
import TableRow from "../../components/TableRow";
import Pagination from "../../components/Pagination";

//helpers
import { handleRegionClick } from "../../services/helpers";
import Loader from "../Loader";

function Table ({iterableData, withPagination}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className={styles.tableContainer}>
            <div className={styles.tableBody}>
                <div className={styles.rows}>
                    {
                        iterableData===null ? <Loader /> :
                        iterableData?.map((row, index) => {
                            return (
                                <TableRow key={index} name={row.region} criticality={row.regionNeed} cities={row.cities} onClick={()=>handleRegionClick(row.region,dispatch,navigate)} />
                            )
                        })
                    }
                </div>
            </div>
            {
                withPagination && <Pagination pageCount={iterableData?.length}/>
            }

        </div>
    );
}

export default Table;
