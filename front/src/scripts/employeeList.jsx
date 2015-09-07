var React = require("react")
,   Employee = require("./employee.jsx")

var EmployeeList = React.createClass({
	render: function(){

		var employees = this.props.data.map(function(employee){
			return(
				<Employee employee={employee} />
			)
		})

		return(
			<div className="employeeList">
				<h2>Employees of the Month</h2>
				<div> {employees}</div>
			</div>
		)
	}
})

module.exports = EmployeeList
