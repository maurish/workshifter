import React from 'react'

export default class Employee extends React.Component {
    render() {
        return(
            <div className="singleEmployee">
                <h2 className="name">
                    {this.props.employee.name} is awesome
                </h2>
            </div>
        )
    }
}
