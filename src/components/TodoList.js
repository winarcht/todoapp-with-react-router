import React, { Component } from 'react';
import Todo from './Todo';

import isEqual from 'lodash.isequal';

class TodoList extends Component {

	shouldComponentUpdate(nextProps, nextState) {
		if (isEqual(nextProps.tasks, this.props.tasks)) {
			return false;
		}

		return true;
	}

/*
	componentDidUpdate(prevProps, prevState) {		
		console.log('TodoList updated');
	}
*/

	render() {
		const { tasks, _onClick } = this.props;
		
		let todos = tasks.map((todo) => {
			return (
				<Todo key={todo.id} task={todo} _onClick={_onClick} />
			);
		});

		return (
			<div id="todo-list">
				<ul>
					{todos}
				</ul>
			</div>
		);
	}

}

export default TodoList;