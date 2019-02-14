import React from 'react'
import { connect } from 'react-redux'

function Counter({ counter, increaseCounter, decreaseCounter }) {
    return (
        <div>
            <button onClick={increaseCounter}>+</button>
            {counter}
            <button onClick={decreaseCounter}>-</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        increaseCounter: ()=>{
            return dispatch({
                type: 'INCREMENT'
            })
        },
        decreaseCounter: ()=>{
            return dispatch({
                type: 'DECREMENT'
            })
        }
    }
}

function mapStateToProps(state) {
    return {
        counter: state.counter.counter
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
