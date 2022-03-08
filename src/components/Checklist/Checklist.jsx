import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// actions
import { setActiveProducts } from "../../redux/AppReducer/actions";

// components
import Checkbox from "../Checkbox";

// styles
import "./Checklist.css";

// selectors
import { selectProducts } from "../../redux/AppReducer/selectors";

function Checklist() {
    const productList = useSelector(selectProducts);

    const dispatch = useDispatch();

    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheckedId, setCheckedId] = useState([]);
    const [list, setList] = useState(productList);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const checkedProduct = productList
            .filter((x) => {
          return isCheckedId.includes(x.id)
        })
            .map(el => el.name);
        dispatch(setActiveProducts(checkedProduct))
    }, [isCheckedId, isCheckAll]);

    const filterSearchResults = (value) => {
        const newList =  productList.filter(el => el?.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        setList([...newList]);
    }

    const handleSearch = (value) => {
        setSearch(value);
        filterSearchResults(value);
    }

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setCheckedId(list?.map(li => li.id));
        if (isCheckAll) {
            setCheckedId([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setCheckedId([...isCheckedId, id]);
        if (!checked) {
            setCheckedId(isCheckedId.filter(item => item !== id));
        }
    };

    const catalog = list?.map(({ id, name }) => {
        return (
            <label className={isCheckedId.includes(id) ? "checked-item" : "not-checked-item"} key={id}>
                <Checkbox
                    key={id}
                    name={name}
                    id={id}
                    handleClick={handleClick}
                    isChecked={isCheckedId.includes(id)}
                />
                {name}
            </label>
        );
    });

    return (
            <div className="checkList">
                <label className="searchAll">
                    <span className="allProducts">Усі продукти</span>
                    <Checkbox
                        name="selectAll"
                        id="selectAll"
                        handleClick={handleSelectAll}
                        isChecked={isCheckAll}
                    />
                </label>
                <input
                    type="text"
                    className="searchInput"
                    value={search}
                    placeholder="Пошук продукту..."
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
