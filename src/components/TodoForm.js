import React from 'react';

class TodoForm extends React.Component {

    render(){
        return(
            <form>
                <input value={this.props.newTask.task} type='text' onChange={this.props.updateNewTask} placeholder="new task"/>
                <button type='submit' onClick={e => this.props.addTask(e)} >Add task</button>
                <button type='button' onClick={this.props.clearCompleted}>Clear completed</button>
            </form>
        )
    }
}

export default TodoForm