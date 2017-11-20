import React, { Component } from 'react';

class Todo extends Component {

	handleChange(e) {
		this.props._onClick(e.target.id);
	}

	render() {
		const { task } = this.props;

		let classes = task.completed ? 'completed' : '';

		return (
			<li className={classes}>
				<input type="checkbox" id={task.id} checked={task.completed} onChange={this.handleChange.bind(this)} />
				<label htmlFor={task.id}>{task.text}</label>
			</li>
		);		
	}

}

export default Todo;