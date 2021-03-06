import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames/bind";

// components
import Checkbox from "../Checkbox";
import Text from "../Text";

// styles
import styles from './Checklist.module.css';

// selectors
import { selectLanguage, selectProducts } from "../../redux/AppReducer/selectors";


function Checklist({setCurrentCategory}) {
    const productList = useSelector(selectProducts);
    const language = useSelector(selectLanguage);

    const [list, setList] = useState(productList);
    const [search, setSearch] = useState("");
    const [isMobileWindow, setIsMobileWindow] = useState(false)


    useEffect(() => {
        setList(productList);
    },[productList])

    useEffect(() => {
        setIsMobileWindow(window.innerWidth > 768)
    },[])


    const filterSearchResults = (value) => {
        const newList =  productList.filter(el => el?.toLowerCase().includes(value));
        setList([...newList]);
    }

    const handleSearch = (value) => {
        setSearch(value);
        filterSearchResults(value);
    }

    const handleChange = e => {
        setCurrentCategory(e)
    };

    const mobileClickHandler = () => {
        setIsMobileWindow(!isMobileWindow);
    }

    const cx = classNames.bind(styles);
    const mobileContentWrapperClasses = cx({
        mobileContentWrapperClasses: true,
        isMobileWindow: !isMobileWindow,
    })

    return (
        <div className={styles.checkList}>
            <div onClick={mobileClickHandler} className={styles.mobileWrapper}>
                <Text text='filter_by_product' />
            </div>
                <div className={mobileContentWrapperClasses}>
                    <div className={styles.shadow} onClick={mobileClickHandler}/>
                    <form className={styles.filterContent}>
                        <label className={styles.searchAll}>
                            <Text text='all_products' />
                            <input
                                name='product'
                                value='all'
                                type="radio"
                                onChange={() => handleChange('all')}
                                defaultChecked
                            />
                        </label>
                        <input
                            type="text"
                            className={styles.searchInput}
                            value={search}
                            placeholder={language === 'ua' ? "??????????" : "Search"}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                        <div className={styles.listContainer}>
                                { list?.length > 0
                                    ? list?.map((name, index) => {
                                        return (
                                            <Checkbox
                                                key={index}
                                                value={name}
                                                handleChange={() => handleChange(name)}
                                            />
                                        )
                                    })
                                    : <Text text='nothing_found'/>
                                }
                        </div>
                    </form>
                </div>
        </div>
    );
}

export default Checklist;
