/**
 * The TodoList, containing a list of tasks.
 */
import React, { Component } from 'react';
import Todo from './Todo';

import isEqual from 'lodash.isequal';

class TodoList extends Component {

  /**
   * This component should be re-rendered only when the VisibleTodoList is modified.
   * Two conditions when it can be happened:
   *   1. Someone added a new task.
   *   2. The selected filter is changed.
   */
	shouldComponentUpdate(nextProps, nextState) {
		if (isEqual(nextProps.tasks, this.props.tasks)) {
			return false;
		}

		return true;
	}

/*
	Helper function to check whether this component is re-rendered or not
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