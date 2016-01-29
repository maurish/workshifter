import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import classnames from 'classnames'

class EmployeeEditModal extends Component {

    render() {
        const { fields: {name, shifts}, handleSubmit, employeeModalActions, modal } = this.props
        const employeeID  = modal.getIn(['employee', 'id'])
        const isOpen = modal.get('isOpen')

        if (!isOpen) return false
        return (
            <section id="modal">
                <div className={classnames('modal', {'modal-closed': !isOpen})}>
                    <div className="modal-close-button" onClick={employeeModalActions.closeModal}>X</div>
                    <h3>Edit employee</h3>

                    <form onSubmit={handleSubmit(employeeModalActions.submitModal.bind(null, employeeID))}>
                        <label>Name<br />
                            <input  type="text" {...name} />
                        </label>
                        {shifts.map((shift, i) =>
                            (<div key={i}>
                                <input type="text" {...shift.startTime} /> -
                                <input type="text" {...shift.endTime} />
                            </div>)
                        )}
                        <button type="submit">Muokkaa</button>
                    </form>

                </div>
                <div className={classnames('modal-background', {'modal-closed': !isOpen})}></div>
            </section>
        )
    }

    componentDidMount() {
        this.props.initializeForm(this.props.modal.get('employee').toJS())
    }

}

export default reduxForm ({
    form: 'employeeEditModal',
    fields: ['name', 'shifts[].startTime', 'shifts[].endTime', 'shifts[].id']
})(EmployeeEditModal)
