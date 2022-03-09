import React from 'react';

// styles
import styles from './Pagination.module.css';

// components
import Button from "../../components/Button";

function Pagination ({pageCount, onPageButtonClick, maxItemPerPage}) {

    const BUTTON_COUNT = Math.ceil(pageCount / maxItemPerPage);

    const clickHandler = (targetPage) => {
        onPageButtonClick?.(targetPage)
    }

    return (
        <div className={styles.paginationBox}>
            {
                [...Array(BUTTON_COUNT)].map((item, index) => {
                    return <Button onClick={() => clickHandler(index + 1)} text={index + 1}/>
                })

            }
        </div>
    );
}

export default Pagination;
