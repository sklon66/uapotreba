import React from "react";

// styles
import Text from '../../components/Text'

const Checkbox = ({ value, handleChange, key, checked }) => {
    return (
        <label key={key}>
            <input
                name='product'
                value={value}
                type="radio"
                // checked={checked}
                onChange={handleChange}
            />
            <Text text={value} />
        </label>
    );
};

export default Checkbox;
