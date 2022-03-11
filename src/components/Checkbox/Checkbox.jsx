import React from "react";

const Checkbox = ({ id, name, handleClick, isChecked, type, value }) => {
    return (
        <input
            id={id}
            name={name}
            value={value}
            type={type}
            onChange={handleClick}
            checked={isChecked}
        />
    );
};

export default Checkbox;
