import React from 'react'

class SearchBar extends React.Component{
    constructor(){
        super()
    }

    change = e => {
        e.preventDefault();
        this.props.searchTask(e)
    }
    render(){
        return(
            <>
                <input value={this.props.taskToSearch} onChange={this.change} type="text" placeholder="search fo a task"/>
            </>
        )
    }
}

export default SearchBar