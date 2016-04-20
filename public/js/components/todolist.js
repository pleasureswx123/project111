import React, { Component, PropTypes } from 'react';
import Todo from '../components/todo'
class TodoList extends Component {
    render() {
        console.log('TodoList')
        return (
            <ul>
                {this.props.todos.map((todo, index) =>
                    <Todo {...todo} key={index} onClick={() => this.props.onTodoClick(index)} />
                )}
            </ul>
        )
    }
}
TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(PropTypes.shape({ text: PropTypes.string.isRequired, completed: PropTypes.bool.isRequired}).isRequired).isRequired
};

export default TodoList
