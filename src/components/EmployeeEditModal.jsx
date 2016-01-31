import React, { Component } from 'react'
import { reduxForm } from 'redux-form'
import classnames from 'classnames'
import moment from 'moment'

class EmployeeEditModal extends Component {

    render() {
        const { fields: {name, shifts}, handleSubmit, employeeModalActions, modal } = this.props
        const employeeID  = modal.getIn(['employee', 'id'])
        const isOpen = modal.get('isOpen')

        return (
            <section id="modal">
                <div className={classnames('modal', {'modal-closed': !isOpen})}>
                    <div className="modal-close-button" onClick={employeeModalActions.closeModal}>X</div>
                    <h3>Edit employee</h3>

                    <form onSubmit={handleSubmit(employeeModalActions.submitModal.bind(null, employeeID))}>
                        <label>Name<br />
                            <input  type="text" {...name} />
                        </label>
                        <button type="submit">Muokkaa</button>
                        <h4>Shifts</h4> 
                        {shifts.map((shift, i) =>
                            (<div key={i}>
                                <input type="text" {...shift.startTime} /> -
                                <input type="text" {...shift.endTime} />
                                <button type="button" onClick={()=>{shifts.removeField(i)}}>Remove</button>
                            </div>)
                        )}
                        <button type="button" onClick={() => {shifts.addField(this.newShiftValues())}}>Add new shift</button>

                    </form>

                </div>
                <div className={classnames('modal-background', {'modal-closed': !isOpen})}></div>
            </section>
        )
    }

    newShiftValues() {
        const nextBusinessDay = moment().weekday(Math.max(moment().add(1, 'day').weekday(), 5)).startOf('day')
        return {
            startTime: nextBusinessDay.hours(8).format('DD.MM.YYYY HH:mm'),
            endTime: nextBusinessDay.hours(16).format('DD.MM.YYYY HH:mm')
        }
    }

    componentDidMount() {
        const { initializeForm, modal } = this.props
        initializeForm(modal.get('employee').toJS())
    }

}

export default reduxForm ({
    form: 'employeeEditModal',
    fields: ['name', 'shifts[].startTime', 'shifts[].endTime']
})(EmployeeEditModal)
