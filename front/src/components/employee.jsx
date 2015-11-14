import React, { Component } from 'react'

export default class Employee extends Component {
    render() {
        const { epmloyee: { name } } = this.props
        return(
            <div className="singleEmployee">
                <h2 className="name">
                    {name} is awesome
                </h2>
            </div>
        )
    }
}
