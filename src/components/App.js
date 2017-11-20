import React, { Component } from 'react';

import './../styles/css/App.css';

import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Footer from './Footer';

import { FILTERS } from './../Conf.js';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      taskBox: '',
      todos: [],
      selectedFilter: FILTERS.ALL
    };

    this.appendTodo = this.appendTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.changeTaskBox = this.changeTaskBox.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

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

  changeTaskBox(text) {
    this.setState({
      taskBox: text
    });
  }

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

  setFilter(filter) {
    this.setState({
      selectedFilter: filter
    });    
  }

  render() {
    const { taskBox, todos, selectedFilter } = this.state;
    let visibleTodos = [];

    switch (selectedFilter) {
      case FILTERS.ACTIVE:
        visibleTodos = todos.filter((todo) => !todo.completed);
        break;

      case FILTERS.DONE:
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
        <Footer filters={FILTERS} tasks={visibleTodos} selectedFilter={selectedFilter} _onClick={this.setFilter} />
      </div>
    );
  }
}

export default App;