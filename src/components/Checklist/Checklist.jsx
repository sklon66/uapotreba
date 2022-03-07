import React, { useState, useEffect } from "react";

// actions
import { setProducts } from "../../redux/AppReducer/actions";

// components
import Checkbox from "../Checkbox";

// styles
import "./Checklist.css";

// data
import { Catalogues } from "../../mock";

function Checklist() {
    const [isCheckAll, setIsCheckAll] = useState(false);
    const [isCheck, setIsCheck] = useState([]);
    const [list, setList] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        setList(Catalogues);
    }, []);

    const filterSearchResults = (value) => {
        const newList =  Catalogues.filter(el => el?.name.toLowerCase().indexOf(value.toLowerCase()) !== -1);
        setList([...newList]);
    }

    const handleSearch = (value) => {
        setSearch(value);
        filterSearchResults(value);
    }

    const handleSelectAll = e => {
        setIsCheckAll(!isCheckAll);
        setIsCheck(list.map(li => li.id));
        if (isCheckAll) {
            setIsCheck([]);
        }
    };

    const handleClick = e => {
        const { id, checked } = e.target;
        setIsCheck([...isCheck, id]);
        if (!checked) {
            setIsCheck(isCheck.filter(item => item !== id));
        }
    };

    const catalog = list.map(({ id, name }) => {
        return (
            <div className={isCheck.includes(id) ? "checked-item" : "not-checked-item"} key={id}>
                <Checkbox
                    key={id}
                    name={name}
                    id={id}
                    handleClick={handleClick}
                    isChecked={isCheck.includes(id)}
                />
                {name}
            </div>
        );
    });

    return (
            <div className="checkList">
                <div className="searchAll">
                    <span className="allProducts">Усі продукти</span>
                    <Checkbox
                        name="selectAll"
                        id="selectAll"
                        handleClick={handleSelectAll}
                        isChecked={isCheckAll}
                    />
                </div>
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
