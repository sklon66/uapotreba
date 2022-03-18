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
        dispatch(setActiveProduct(allProductChecked));
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
        console.log(e)
        setCheckedName(e);
        dispatch(setActiveProduct(e));
    };

    const isChecked = (name, value) => {
        return name === value;
    }

    const clearAll = () => {
        setCheckedName(allProductChecked);
        dispatch(setActiveProduct(allProductChecked));
    }

    return (
        <div className="checkList">
            <form>
                <label className="searchAll">
                    <div className="allProducts"><Text text='all_products' /></div>
                    <input
                        name='product'
                        value='all'
                        type="radio"
                        onChange={() => handleChange('all')}
                        checked={activeProduct === 'all'}
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
    );
}

export default Checklist;
