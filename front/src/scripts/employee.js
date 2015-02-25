var React = require("react");

var Employee = React.createClass({
	render: function(){
		return(
			<div className="singleEmployee">
				<h2 className="employeeName">
					{this.props.employee.employeeName} is awesome
				</h2>
			</div>
		);
	}
});

module.exports = Employee;