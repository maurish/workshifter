import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import EmployeeContainer from './components/smart/EmployeeContainer'
import store from './store'



const rootElement = (
    <Provider store={store}>
        <EmployeeContainer />
    </Provider>
)

ReactDOM.render(
	rootElement,
	document.getElementById('app')
)
