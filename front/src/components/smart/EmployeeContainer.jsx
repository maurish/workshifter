import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as employeeActions from '../../actions/employeeActions'
import EmployeePage from '../EmployeePage'

const mapStateToProps = (state) => ({
    employees: state.employees.get('employees').toJS(),
    newEmployeeName: state.employees.get('newEmployee')
})

const mapDispatchToProps = (dispatch) => ({
    employeeActions: bindActionCreators(employeeActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)
