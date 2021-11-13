import { createStore } from "redux";

const initialState = {
    value: 0,
};

const reducer = (state = initialState, action) => {
//    if (action.type == 'INC' ) value = value + 1;
    switch(action.type) {
        case 'INC': return {value: state.value + 1};
        case 'DEC': return {value: state.value - 1};
        default: return state;
    }
};

const store = createStore(reducer);
export default store;