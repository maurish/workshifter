import React, { Component } from 'react'
import classnames from 'classnames'

export default class Modal extends Component {
    
    render() {
        const {employeeActions, modal, modalActions} = this.props
        return (
            <section id="modal">
                <div className={classnames('modal', {'modal-closed': !modal.get('isOpen')})}>
                    <div className="modal-close-button" onClick={modalActions.closeModal}>X</div>
                    <h3>Edit employee</h3>
                    <input  type="text" 
                            value={modal.getIn(['employee', 'name'], null)} 
                            onChange={this.handleChange.bind(this)}
                    />
                    <button onClick={modalActions.submitModal.bind(null, modal.get('employee'))}>Muokkaa</button>
                </div>
                <div className={classnames('modal-background', {'modal-closed': !modal.get('isOpen')})}></div>
            </section>
        )
    }

    handleChange(e) {
        this.props.modalActions.changeModalValue(e.target.value)
    }
}
