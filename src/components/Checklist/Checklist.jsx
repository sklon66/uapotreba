import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { setActiveProduct } from "../../redux/AppReducer/actions";

// components
import Checkbox from "../Checkbox";

// styles
import styles from './Checklist.module.css';

// selectors
import { selectActiveProduct, selectLanguage, selectProducts } from "../../redux/AppReducer/selectors";
import Text from "../Text";
import Button from "../Button";

function Checklist() {
    const productList = useSelector(selectProducts);
    const language = useSelector(selectLanguage);
    const activeProduct = useSelector(selectActiveProduct);

    const allProductChecked = 'all';

    const dispatch = useDispatch();

    const [isCheckedName, setCheckedName] = useState(allProductChecked);
    const [list, setList] = useState(productList);
    const [search, setSearch] = useState("");
    const [isMobileWindow, setIsMobileWindow] = useState(true)

    useEffect(() => {
        setList(productList);
    },[productList])

    useEffect(() => {
        setCheckedName(activeProduct);
        dispatch(setActiveProduct(activeProduct));
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
        setCheckedName(e);
        dispatch(setActiveProduct(e));
    };

    const mobileClickHandler = () => {
        setIsMobileWindow(!isMobileWindow);
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
                                    onClick={() => handleChange('all')}
                                    checked={activeProduct === 'all'}
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
