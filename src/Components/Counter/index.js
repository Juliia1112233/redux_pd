import React from 'react';
import { useState } from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    return (
        <>
            <h1>{props.value}</h1>
            <button onClick={props.dec}>-</button>
            <button onClick={props.inc}>+</button>
        </>
    )
}

const mapStateToProps = (state) => {
    const {value} = state;
    return {
        value,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dec: () => dispatch({type: 'DEC'}),
        inc: () => dispatch({type: 'INC'}),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);