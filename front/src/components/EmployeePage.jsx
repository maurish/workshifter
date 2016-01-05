import React, { Component } from 'react'
import classnames from 'classnames'
import EmployeeList from './EmployeeList'
import EmployeeAddForm from './EmployeeAddForm'

export default class EmployeePage extends Component {

    render() {
        const { employees, newEmployeeName, employeeActions, modal, modalActions} = this.props
       
        return (
            <div className="employeePage">
                <section id="employees">
                    <h2>Employees</h2>
                    <EmployeeList {...this.props}/>
                    <EmployeeAddForm name={newEmployeeName} actions={employeeActions} />
                </section>

                <section id="modal">
                    <div className={classnames('modal', {'modal-closed': !modal.get('isOpen')})}>
                        <div className="modal-close-button" onClick={employeeActions.closeModal}>X</div>
                        <h3>Edit employee</h3>
                        <input  type="text" 
                                value={modal.getIn(['employee', 'name'], null)} 
                                onChange={this.handleChange.bind(this)}
                        />
                        <button onClick={employeeActions.submitModal.bind(null, modal.get('employee'))}>Muokkaa</button>
                    </div>
                    <div className={classnames('modal-background', {'modal-closed': !modal.get('isOpen')})}></div>
                </section>
            </div>
            )
    }

    handleChange(e) {
        const { employeeActions } = this.props
        employeeActions.changeModalValue(e.target.value)
    }

    componentDidMount() {
        const { employeeActions: { fetchEmployees } } = this.props
        fetchEmployees()
    }
}
