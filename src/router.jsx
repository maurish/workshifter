import React from 'react'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import store from './store'
import LoginPage from './components/smart/LoginPageContainer'
import EmployeePage from './components/smart/EmployeeContainer'

const requireLogin = (nextState, replaceState) => {
    if (!store.getState().user.get('loggedIn')) {
        replaceState({
            pathname: '/login',
            state: { next: nextState.location.pathname}
        })
    }
}


const router = (
    <Router history={hashHistory}>
        <Route path="/"> 
            <Route onEnter={requireLogin} component={EmployeePage}>
                <IndexRoute component={EmployeePage} />
            </Route>
            <Route path="login" component={LoginPage}/>
        </Route>
    </Router>
)

export const history = hashHistory
export default router
