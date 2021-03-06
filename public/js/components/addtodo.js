import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
class AddTodo extends Component {
    render() {
        console.log('AddTodo')
        return (
            <div>
                <input type='text' ref='input' />
                <button onClick={e => this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }

    handleClick(e) {
        console.log(1)
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

export default AddTodo