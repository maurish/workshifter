import React, { Component } from 'react'
import {reduxForm} from 'redux-form'

class ShiftAddForm extends Component {
    render() {
        const { fields: {startTime, endTime} } = this.props
        console.log(this.props)
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Start time: <br />
                    <input type="text" {...startTime} />
                </label>
                <br />
                <label>
                    End time: <br />
                    <input type="text" {...endTime} />
                </label> <br />
                <button onClick={this.handleSubmit.bind(this)}>Submit</button> 
            </form>
       )
    }

    handleSubmit(e) {
        const { employeeId, addNewShift, fields: {startTime, endTime} } = this.props
        e.preventDefault()
        addNewShift(employeeId, startTime, endTime)
    }
}

export default reduxForm({
    form: 'shiftAddForm',
    fields: ['startTime', 'endTime']
})(ShiftAddForm)
