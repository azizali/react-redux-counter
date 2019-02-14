import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Counter from './Counter'

render(
    <Provider store={store}>
        <Counter />
    </Provider>,
    document.querySelector('#app'))