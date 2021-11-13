import React from 'react';

const Counter = (props) => {
    return (
        <>
            <h1>{value}</h1>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
        </>
    )
}

export default Counter;