import React from 'react'
import { Router, Route, IndexRoute, hashHistory, Redirect } from 'react-router'
import LoginPage from './components/LoginPage'
import EmployeePage from './components/LoginPage'

const requireLogin = (nextState, replaceState) => {
    replaceState({
        pathname: '/login',
        state: { next: nextState.location.pathname}
    })
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

export default router
