const initialState = {
    counter: 51
}

export default (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        }
    } else {
        return { ...state }
    }
}
