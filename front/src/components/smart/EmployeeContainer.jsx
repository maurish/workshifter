import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as employeeActions from '../../actions/employeeActions'
import * as employeeModalActions from '../../actions/employeeModalActions'
import EmployeePage from '../EmployeePage'

const mapStateToProps = (state) => ({
    employees: state.employees.get('employees'),
    newEmployeeName: state.employees.get('newEmployee'),
    modal: state.modal
})

const mapDispatchToProps = (dispatch) => ({
    employeeActions: bindActionCreators(employeeActions, dispatch),
    employeeModalActions: bindActionCreators(employeeModalActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)
