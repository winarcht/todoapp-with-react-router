/**
 * A single task that is listed in the TodoList
 */
import React, { Component } from 'react';

class Todo extends Component {

  /**
   * Call the parent handler when a task is clicked,
   * to toggle the status from active to completed, or vice versa.
   * see "toggleTodo" in App.js.
   */
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