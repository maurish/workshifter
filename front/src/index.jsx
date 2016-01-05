import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import EmployeeContainer from './components/smart/EmployeeContainer'
import store from './store'
require('./index.less')



const provider = (
    <Provider store={store}>
        <EmployeeContainer />
    </Provider>
)

let rootElement = provider
if (__DEVELOPMENT__ && __DEVTOOLS__) {
    const { DevTools, DebugPanel, LogMonitor } = require('redux-devtools/lib/react')
    rootElement = (
        <div>
            {provider}
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        </div>
    )
}

ReactDOM.render(
	rootElement,
	document.getElementById('app')
)
