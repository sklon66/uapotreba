import React from 'react';

function Button ({onClick, text}) {
    const onClickHandler = () => {
        onClick?.()
    }

    return (
        <button onClick={onClickHandler}>{text}</button>
    );
}

export default Button;
