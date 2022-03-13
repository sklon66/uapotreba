import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { setActiveProduct } from "../../redux/AppReducer/actions";

// components
import Checkbox from "../Checkbox";

// styles
import "./Checklist.css";

// selectors
import { selectActiveProduct, selectLanguage, selectProducts } from "../../redux/AppReducer/selectors";
import Text from "../Text";

function Checklist() {
    const productList = useSelector(selectProducts);
    const language = useSelector(selectLanguage);
    const activeProduct = useSelector(selectActiveProduct);

    const allProductChecked = 'all';

    const dispatch = useDispatch();

    const [isCheckedName, setCheckedName] = useState(allProductChecked);
    const [list, setList] = useState(productList);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setList(productList);
    },[productList])

    useEffect(() => {
        setCheckedName(activeProduct);
        dispatch(setActiveProduct(activeProduct));
    },[])


    const filterSearchResults = (value) => {
        const newList =  productList.filter(el => el?.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        setList([...newList]);
    }

    const handleSearch = (value) => {
        setSearch(value);
        filterSearchResults(value);
    }

    const handleChange = e => {
        const { value } = e.target;
        setCheckedName(value);
        dispatch(setActiveProduct(value));
    };

    const isChecked = (name, value) => {
        return name === value;
    }

    const clearAll = () => {
        setCheckedName(allProductChecked);
        dispatch(setActiveProduct(allProductChecked));
    }

    const catalog = list?.map((name) => {
        return (
            <label className={isChecked(name, isCheckedName) ? "checked-item" : "not-checked-item"} key={name}>
                <Checkbox
                    key={name}
                    value={name}
                    type="radio"
                    handleClick={handleChange}
                    isChecked={isChecked(name, isCheckedName)}
                />
                <Text text={name} />
            </label>
        );
    });

    return (
            <div className="checkList">
                <label className="searchAll">
                    <div className="allProducts"><Text text='all_products' /></div>
                    <Checkbox
                        type="radio"
                        handleClick={clearAll}
                        isChecked={isChecked(allProductChecked, isCheckedName)}
                    />
                </label>
                <input
                    type="text"
                    className="searchInput"
                    value={search}
                    placeholder={language === 'ua' ? "Пошук" : "Search"}
                    onChange={(e) => handleSearch(e.target.value)}
                />
                <div className="list-container">
                    { list?.length > 0
                        ? catalog
                        : <div>Нічого не знайдено</div>
                    }
                </div>
            </div>
    );
}

export default Checklist;
