import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as employeeActions from '../../actions/employeeActions'
import EmployeeList from '../EmployeeList'

const mapStateToProps = (state) => ({
    employees: state.employees.toJS()
})

const mapDispatchToProps = (dispatch) => ({
    employeeActions: bindActionCreators(employeeActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeList)
