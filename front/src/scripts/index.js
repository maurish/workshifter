var React = require('react');

var employees = [
	{employeeName: "Pauli Perälä"},
	{employeeName: "Johannes Elmnäinen"}
];

var EmployeeList = React.createClass({
	render: function(){

		var employees = this.props.data.map(function(employee){
			return(
				<Employee employee={employee} />
			);
		});

		return(
			<div className="employeeList">
				<h2>Employees of the Month</h2>
				<div> {employees}</div>
			</div>
		);
	}
});

var Employee = React.createClass({
	render: function(){
		return(
			<div className="singleEmployee">
				<h2 className="employeeName">
					{this.props.employee.employeeName} is a faggot
				</h2>
			</div>
		);
	}
});

React.render(
	<EmployeeList data={employees} />,
	document.getElementById('content')
	);