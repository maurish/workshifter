var React = require('react')
,   EmployeeList = require('./employeeList.jsx')

var employees = [
	{name: "Pauli Perälää"},
	{name: "Johannes Elmnäinen"}
]

React.render(
	<EmployeeList data={employees} />,
	document.getElementById('content')
)
