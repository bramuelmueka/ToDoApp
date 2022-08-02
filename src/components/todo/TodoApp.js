import React, { Component } from 'react';
import { TodoForm, TodoList } from '../todo';
import { addTodo, generateId, findById, toggleTodo, updateTodo, removeTodo } from '../../lib/todoHelpers';
import { pipe, partial } from '../../lib/utils';
import profileImage from '../../img/pic5.svg';

export  const TodoApp = class TodoApp extends Component {

  state = {
    currentTodo: "",
    errorMessage: "",
    todos: [
      
      { id: 1, name: 'Set up group zoom call', isComplete: true },
      { id: 2, name: 'Buy groceries for the new month', isComplete: false },
      { id: 3, name: 'Pay internet subscription', isComplete: false },
      { id: 4, name: 'Ask landlord for extension of rent payment', isComplete: true }
    ]
  }

  handleToggle = (todoId) => { 

    //Get updatedTodos
    const pipeline = pipe(findById, toggleTodo, partial(updateTodo, this.state.todos))
    const updatedTodos = pipeline(todoId, this.state.todos)

    this.setState({todos: updatedTodos})
  }

  handleOnchangeInput= (event)=> {
    this.setState({currentTodo: event.target.value, errorMessage: ""})
  }

  handleSubmit = (event) => { 
    event.preventDefault()

    const newTodo = { id: generateId(), name: this.state.currentTodo, isComplete: false }

    const updatedTodos = addTodo(this.state.todos, newTodo)
    
    this.setState({ todos: updatedTodos, currentTodo: '' })
  }

  handleEmptySubmit = (event) => {
    event.preventDefault()

    this.setState({ errorMessage: "Please supply a todo name" })
  }

  handleRemove = (id, event) => {
    event.preventDefault()

    const updatedTodos = removeTodo(this.state.todos, id)

    this.setState({todos: updatedTodos})
  }

  render() {

    const submitHandler = this.state.currentTodo ? this.handleSubmit : this.handleEmptySubmit

    return (
      <div className="App">
        
        <div className="todoWrapper">
          {this.state.errorMessage && <div className="errorMessage">{this.state.errorMessage}</div>}  
          
          <TodoForm
            handleSubmit={ submitHandler }  
            currentTodo={this.state.currentTodo} 
            handleOnchangeInput={this.handleOnchangeInput} />
          
          <TodoList
            todos={this.state.todos}
            handleToggle={ this.handleToggle }
            handleOnchangeCheckbox={this.handleOnchangeCheckbox}
            handleRemove = {this.handleRemove}
          />
          
              <div style={{width:"40%",position: "absolute", right: "2rem",top: "14rem",}}>
            <img src={profileImage} alt="avatar" class="avatar"/>
        </div>
        </div>
      </div>
    );
  }
}



