import React from 'react'
import styled from 'styled-components'

const Done = styled.li`
    text-decoration: line-through;
    color: red;
`

class Todo extends React.Component{
    render(){
        return(
            !this.props.todo.completed?
            <li onClick={() => this.props.changeCompleted(this.props.todo.id)}>{this.props.todo.task}</li>:
            <Done onClick={() => this.props.changeCompleted(this.props.todo.id)}>{this.props.todo.task}</Done>
        )
        
    }
}

export default Todo