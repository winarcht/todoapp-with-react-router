import React, { Component } from 'react';

class AddTodo extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		if (nextProps.taskBox === this.props.taskBox) {
			return false;
		}

		return true;
	}

/*
	componentDidUpdate(prevProps, prevState) {
		console.log('AddTodo updated');
	}
*/

	handleChange(e) {
		this.props._onChange(this.taskInput.value);
	}

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