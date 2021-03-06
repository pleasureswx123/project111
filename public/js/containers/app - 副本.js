import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux'
import { render,findDOMNode } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router,IndexLink, Route,IndexRoute, Link,Redirect } from 'react-router'
import ReactMixin from 'react-mixin';

import {Provider,connect } from 'react-redux';

import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../constants/actionTypes'
import * as CounterActions from '../actions/'
import AddTodo from '../components/addtodo'
import TodoList from '../components/todolist'
import Footer from '../components/footer'


class App extends Component {
    render() {
    console.log(9);
        // 通过调用 connect() 注入:
        console.log(this.props)
        const { dispatch, visibleTodos, visibilityFilter,addTodo,completeTodo,setVisibilityFilter } = this.props
        return (
            <div>
                <AddTodo onAddClick={text => addTodo(text) }/>
                <TodoList todos={visibleTodos} onTodoClick={index => completeTodo(index) }/>
                <Footer filter={visibilityFilter} onFilterChange={nextFilter => setVisibilityFilter(nextFilter) }/>
            </div>
        )
    }
}

App.propTypes = {
    visibleTodos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })),
    visibilityFilter: PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    console.log(77);
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            console.log(todos);
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            console.log(88);
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

// 基于全局 state ，哪些是我们想注入的 props ?
// 注意：使用 https://github.com/faassen/reselect 效果更佳。
function select(state) {
    console.log(66);
    console.log(state);
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

const mapStateToProps = state => ({counter:state.counter})
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions,dispatch)



// 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
export default connect(select,mapDispatchToProps)(App);

// http://camsong.github.io/redux-in-chinese/docs/react-redux/quick-start.html