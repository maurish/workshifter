import { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as employeeActions from '../../actions/employeeActions'
import * as modalActions from '../../actions/modalActions'
import EmployeePage from '../EmployeePage'

const mapStateToProps = (state) => ({
    employees: state.employees.get('employees').toJS(),
    newEmployeeName: state.employees.get('newEmployee'),
    modal: state.modal
})

const mapDispatchToProps = (dispatch) => ({
    employeeActions: bindActionCreators(employeeActions, dispatch),
    modalActions: bindActionCreators(modalActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage)
