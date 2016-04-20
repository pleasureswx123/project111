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


import Logo from '../components/logo'
import Nav from '../components/nav'
import ButSubmit from '../components/butSubmit'
import Top from '../components/top'
import Bottom from '../components/bottom'
import MainIndexContent from '../components/mainIndexContent'

//test
// import Mod2 from '../components/mod/mod2'


class App extends React.Component {
    render() {
        const { data,toggleNavStatus,content } = this.props

        console.log(data);
        console.log(Object.prototype.toString.call(data.navData));
        console.log(data.navData[0]);
        console.log(data.navData[0].title);

        

        return (
            <div className="miuiWrap">
                <div onclick={toggleNavStatus}></div>
                <div className="side">
                    <Logo />
                    <Nav data={data.navData} onclick={toggleNavStatus} />
                    <ButSubmit />
                </div>
                <div className="main">
                    <Top />
                    {React.cloneElement(this.props.children, {data: data})}
                    <Bottom />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({data:state})
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions,dispatch)


export default connect(mapStateToProps,mapDispatchToProps)(App);
