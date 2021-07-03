import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{
    
    render(){
        return(
            <>
            <p>List of things to do:</p>
            <ul>
                {this.props.todoList.map(todo => <Todo todo={todo} key={todo.id} changeCompleted={this.props.changeCompleted}/>)}
            </ul>
            </>
        )
    }

}

export default TodoList

// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
