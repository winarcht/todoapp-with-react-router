/**
 * The AddTodo form.
 */
import React, { Component } from 'react';

class AddTodo extends Component {

  /**
   * This component should be re-rendered only when the input value is changed.
   * Two conditions when it can be happened:
   *   1. Someone types in the input box.
   *   2. The form is submitted and the input value is set to "" by the "appendTodo" function.
   */
	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.taskBox === this.props.taskBox) {
			return false;
		}

		return true;
	}

/*
  Helper function to check whether this component is re-rendered or not
	componentDidUpdate(prevProps, prevState) {
		console.log('AddTodo updated');
	}
*/

  /**
   * Call the parent handler when the input value is changed.
   * As a controllable input, this must be done.
   * see "changeTaskBox" in App.js.
   */
	handleChange(e) {
		this.props._onChange(this.taskInput.value);
	}

  /**
   * Call the parent handler when the form is submitted.
   * see "appendTodo" in App.js.
   */
	handleSubmit(e) {
		e.preventDefault();

		this.props._onSubmit(this.taskInput.value);
	}

	render() {
		const { taskBox } = this.props;

		return (
			<div id="addtodo-form">
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" name="task" placeholder="What do you want to do?" autoComplete="off" value={taskBox} ref={(input) => this.taskInput = input} onChange={this.handleChange.bind(this)} />
					<input type="submit" value="Add" />
				</form>
			</div>
		);
	}

}

export default AddTodo;