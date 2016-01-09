import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import EmployeeContainer from './components/smart/EmployeeContainer'
import store from './store'
require('./index.less')

const content = <EmployeeContainer />
let rootElement = content
if (__DEVELOPMENT__ && __DEVTOOLS__) {
    const DevTool = require('./DevTools')
    rootElement = (
        <div>
            {content}
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
