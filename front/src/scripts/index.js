var React = require('react');

var employees = [
	{employeeName: "Pauli Perälä"},
	{employeeName: "Johannes Elmnäinen"}
	];

var EmployeeList = React.createClass({
	render: function(){

		var employees = this.props.employees.map(function(employee){
			return(
				<Employee employeeName={employee.EmployeeName} />
			);
		});

		return(
			<div className="employeeList">
				<h2>Employees of the Month</h2>
				{employees}
			</div>
		);
	}
});

var Employee = React.createClass({
	render: function(){
		return(
			<div className="singleEmployee">
				<h2 className="employeeName">
					{this.props.employeeName}
				</h2>
			</div>
		);
	}
});

React.render(
	<EmployeeList data={employees} />,
	document.getElementById('content')
	);