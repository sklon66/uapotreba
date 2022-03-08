import React from 'react';

// constants
import {MAX_ROWS_PER_PAGE} from "../../constants/constants";

// styles
import styles from './Pagination.module.css';

// components
import Button from "../../components/Button";

function Pagination ({pageCount, onPageButtonClick}) {

    const BUTTON_COUNT = Math.ceil(pageCount / MAX_ROWS_PER_PAGE);

    const clickHandler = (targetPage) => {
        onPageButtonClick?.(targetPage)
    }

    return (
        <div className={styles.paginationBox}>
            {
                [...Array(BUTTON_COUNT)].map((item) => {
                    console.log('item', item)
                    return <Button onClick={() => clickHandler(Array(BUTTON_COUNT)[item])} text={Array(BUTTON_COUNT)[item]}/>
                })

            }
        </div>
    );
}

export default Pagination;
