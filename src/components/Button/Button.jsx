import React from 'react';

function Button ({onClick}) {
    const onClickHandler = () => {
        onClick?.()
    }

    return (
        <button onClick={onClickHandler}/>
    );
}

export default Button;
