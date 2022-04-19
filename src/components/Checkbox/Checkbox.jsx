import React from "react";

// components
import Text from '../../components/Text'

// styles
import styles from './Checkbox.module.css'

const Checkbox = ({ value, handleChange, key }) => {
    return (
        <label className={styles.label} key={key}>
            <input
                name='product'
                value={value}
                type="radio"
                onChange={handleChange}
                className={styles.input}
            />
            <div className={styles.inputDisplay} />
            <Text text={value} />
        </label>
    );
};

export default Checkbox;
