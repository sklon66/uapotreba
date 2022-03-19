import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import Checkbox from "../Checkbox";
import Text from "../Text";

// styles
import styles from './Checklist.module.css';

// selectors
import { selectLanguage, selectProducts } from "../../redux/AppReducer/selectors";
import {useLocation} from "react-router-dom";

function Checklist({setCurrentCategory}) {
    const productList = useSelector(selectProducts);
    const language = useSelector(selectLanguage);

    const [list, setList] = useState(productList);
    const [search, setSearch] = useState("");
    const [isMobileWindow, setIsMobileWindow] = useState(true)

    const location = useLocation();

    useEffect(() => {
        setList(productList);
    },[productList])

    useEffect(() => {
        setCurrentCategory('all')
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

    const handleAllClick = () => {
        // really stupid fix
        window.location.reload()
    }

    return (
        <div className={styles.checkList}>
            <div onClick={mobileClickHandler} className={styles.mobileWrapper}>
                <Text text='filter_by_product' />
            </div>
            {
                isMobileWindow ? (
                    <div className={styles.mobileContentWrapper}>
                        <div className={styles.shadow} onClick={mobileClickHandler}/>
                        <form className={styles.filterContent}>
                            <label className={styles.searchAll}>
                                <Text text='all_products' />
                                <input
                                    name='product'
                                    value='all'
                                    type="radio"
                                    onChange={handleAllClick}
                                    defaultChecked
                                />
                            </label>
                            <input
                                type="text"
                                className={styles.searchInput}
                                value={search}
                                placeholder={language === 'ua' ? "Пошук" : "Search"}
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
                                        : <div>Нічого не знайдено</div>
                                    }

                            </div>
                        </form>
                    </div>
                ) : null
            }
        </div>
    );
}

export default Checklist;
