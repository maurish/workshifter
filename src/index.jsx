import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import EmployeeContainer from './components/smart/EmployeeContainer'
import store from './store'
import * as employeeActions from './actions/employeeActions'
import router from './router'

store.dispatch(employeeActions.fetchEmployees())

let rootElement = router
if (__DEVELOPMENT__ && __DEVTOOLS__) {
    const DevTool = require('./DevTools')
    rootElement = (
        <div>
            {router}
            <DevTool />
        </div>
    )
} 

const app = (
    <Provider store={store}>
        {rootElement}
    </Provider>
)

ReactDOM.render(app, document.getElementById('app'))
