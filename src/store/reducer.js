const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    //could use switch statement instead of IF statement
    if (action.type === 'INCREMENT') {
        return {
            ...state,
            counter: state.counter + 1
        }

    }
    if (action.type === 'DECREMENT') {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === 'ADDFIVE') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    if (action.type === 'SUBFIVE') {
        return {
            ...state,
            counter: state.counter - action.value
        }
    }
    return state;
};

export default reducer;