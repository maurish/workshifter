import { Component } from 'react'
import { connect } from 'react-redux'

import employeeActions from '../../actions/employeeActions'
import EmployeeList from '../EmployeeList'

function mapStateToProps(state) {
    return {
        employees: state.employees.toJS()
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
