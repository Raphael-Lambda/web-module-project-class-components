import React from 'react';

import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      newTask: {
        task: '',
        completed: false
      },
      thingsToDo: [],
    }
  }

  componentDidMount(){
    this.setState({
      ...this.state,
      thingsToDo: JSON.parse(localStorage.getItem("thingsToDoList")) || []
    })
  }
  
  updateNewTask = e =>{
    this.setState({
      ...this.state, 
      newTask: {
        task: e.target.value,
        completed: false
      }})
  }

  addTask = e => {
    e.preventDefault();
    const task = {
      ...this.state.newTask,
      id: Date.now()
    }
    this.setState({
      newTask:  {
        task: '',
        completed: false
      },
      thingsToDo: [...this.state.thingsToDo, task]
    });
  }

  // save to local storage
  componentDidUpdate(prevProps, prevState){
    if(prevState.thingsToDo !== this.state.thingsToDo){
      localStorage.setItem("thingsToDoList", JSON.stringify(this.state.thingsToDo))
    }
  }
 
  changeCompleted = taskId => {
    const list1 = this.state.thingsToDo.map(item => {if(item.id === taskId){item.completed = !item.completed}; return item})
    this.setState({
      ...this.state,
      thingsToDo: [...list1]

    })
  }

  clearCompleted = () =>{
    const list1 = this.state.thingsToDo.filter(item => item.completed === false)
    this.setState({
      ...this.state,
      thingsToDo: [...list1]

    })
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.thingsToDo} changeCompleted={this.changeCompleted}/>
        <TodoForm newTask={this.state.newTask} updateNewTask={this.updateNewTask} addTask={this.addTask} clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
