var React = require("react")

var Employee = React.createClass({
	render: function(){
		return(
			<div className="singleEmployee">
				<h2 className="name">
					{this.props.employee.name} is awesome
				</h2>
			</div>
		)
	}
})

module.exports = Employee
