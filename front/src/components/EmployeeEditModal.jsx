import React, { Component } from 'react'
import classnames from 'classnames'
import EmployeeShiftEditForm from './EmployeeShiftEditForm'

export default class EmployeeEditModal extends Component {

    render() {
        const {employeeActions, modal, employeeModalActions} = this.props
        const employee = modal.get('employee')
        console.log(employee.toJS())
        return (
            <section id="modal">
                <div className={classnames('modal', {'modal-closed': !modal.get('isOpen')})}>
                    <div className="modal-close-button" onClick={employeeModalActions.closeModal}>X</div>
                    <h3>Edit employee</h3>

                    <form onSubmit={this.onSubmit.bind(this)}>
                        <label>Name
                            <input  type="text"
                                    value={employee.get('name')}
                                    onChange={this.handleChange.bind(this)}
                            />
                            <button type="submit">Muokkaa</button>
                        </label>
                    </form>
                    <EmployeeShiftEditForm  submitEditedShifts={this.props.employeeModalActions.addNewEmployeeShift}
                                            fields={employee.get('shifts')}
                                            employee={employee}>
                    </EmployeeShiftEditForm>
                </div>
                <div className={classnames('modal-background', {'modal-closed': !modal.get('isOpen')})}></div>
            </section>
        )
    }

    onSubmit(e) {
        e.preventDefault()
        const {employeeModalActions, modal} = this.props
        employeeModalActions.submitModal(modal.get('employee'))
    }

    handleChange(e) {
        this.props.employeeModalActions.changeModalValue(e.target.value)
    }
}
