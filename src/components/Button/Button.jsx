import React from 'react';

function Button ({onClick, text}) {
    const onClickHandler = () => {
        onClick?.()
    }

    console.log('text', text)

    return (
        <button onClick={onClickHandler}>{text}</button>
    );
}

export default Button;
