var React = require('react');
var EmployeeList = require('./employeeList');

var employees = [
	{employeeName: "Pauli Perälä"},
	{employeeName: "Johannes Elmnäinen"}
];

React.render(
	<EmployeeList data={employees} />,
	document.getElementById('content')
	);