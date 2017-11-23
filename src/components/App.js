/**
 * The main App.
 * Consists of three sections:
 *   1. AddTodo, a form where user can add a new task.
 *   2. TodoList, a list of tasks that have been added on #1.
 *   3. Footer, a footer with filters in it.
 */
import React, { Component } from 'react';

import './../styles/css/App.css';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import { FILTERS } from './../Conf.js';

class App extends Component {

  constructor(props) {
    super(props);

    /**
     * Get the initial URL when loaded,
     * and set it as the selected filter
     * eg. /Active -> selectedFilter: 'active'
     */
    let selectedFilter = FILTERS.ALL.toLowerCase();

    if (typeof this.props.match.params.filter !== 'undefined') {
      selectedFilter = this.props.match.params.filter.toLowerCase();
    }

    /**
     * Set the initial state.
     */
    this.state = {
      taskBox: '',
      todos: [],
      selectedFilter
    };

    /**
     * Bind all events
     */
    this.appendTodo = this.appendTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.changeTaskBox = this.changeTaskBox.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  /**
   * Function to append new task.
   * md5 is used to generate hash for the id,
   * so each of them is unique.
   */
  appendTodo(text) {
    let md5 = require('md5');

    this.setState((prevState) => {
      return {
        todos: [
          ...prevState.todos,
          {
            id: md5(text + Date.now()),
            text,
            completed: false
          }
        ],
        taskBox: ''
      }
    });
  }

  /**
   * Function to change the value of the input box in the AddTodo form.
   * note: read "controllable input"
   */
  changeTaskBox(text) {
    this.setState({
      taskBox: text
    });
  }

  /**
   * Function to toggle the status of a task.
   */
  toggleTodo(id) {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.map((todo) => {
          if (todo.id === id) {
            return Object.assign({}, todo, 
              { 
                completed: !todo.completed
              }
            );
          }

          return todo;
        })
      };
    });
  }

  /**
   * Function to set the selected filter.
   */
  setFilter(filter) {
    this.setState({
      selectedFilter: filter
    });    
  }

  /**
   * Everytime the URL changes (in this case the props.match.params.filter),
   * the selectedFilter should be changed as well.
   */
  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.filter !== nextProps.match.params.filter) {
      this.setFilter(nextProps.match.params.filter.toLowerCase());
    }
  }

  render() {
    const { taskBox, todos, selectedFilter } = this.state;
    
    /**
     * Filter the list of todo based on the selected filter.
     */
    let visibleTodos = [];

    switch (selectedFilter) {
      case FILTERS.ACTIVE.toLowerCase():
        visibleTodos = todos.filter((todo) => !todo.completed);
        break;

      case FILTERS.DONE.toLowerCase():
        visibleTodos = todos.filter((todo) => todo.completed);
        break;

      default:
        visibleTodos = [...todos];
        break;
    }

    return (
      <div id="todo-app">
        <AddTodo taskBox={taskBox} _onChange={this.changeTaskBox} _onSubmit={this.appendTodo} />
        <TodoList tasks={visibleTodos} _onClick={this.toggleTodo} />
        <Footer filters={FILTERS} tasks={visibleTodos} selectedFilter={selectedFilter} />
      </div>
    );
  }
}

export default App;