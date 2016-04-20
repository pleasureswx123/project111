import '../less/settings.less'
import '../less/main.less'
import './lib/zepto.min.js'
import React, { Component, PropTypes }  from 'react'
import Reflux from 'reflux';
import { render,findDOMNode } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router,IndexLink, Route,IndexRoute, Link,Redirect } from 'react-router'
import ReactMixin from 'react-mixin';

import _ from 'lodash'
import classNames from 'classnames'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import {Provider,connect } from 'react-redux';
import App from './containers/app';


import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './constants/actionTypes'

import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import * as reducers  from './reducers/todoApp'
import * as reducers  from './store/entry'
// asfdasf

let store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    })
);

const history = syncHistoryWithStore(browserHistory, store);


var a = {
    '/':0,
    '/mod2':0,
    '/mod3':1,
    '/mod4':1,
    '/mod5':2,
    '/mod6':2,
    '/mod7':2,
    '/mod8':3,
    '/mod9':4,
    '/mod10':5,
    '/mod11':6
};
var num = 0;


history.listen(function (location) {
    num = a[location.pathname];
    console.log(num);
});


//
//
// let unsubscribe = store.subscribe(() =>
//     console.log('--------------------------')
// );
//
//
// function addTodo(text) {
//     return { type: ADD_TODO, text };
// }
//
// function completeTodo(index) {
//     return { type: COMPLETE_TODO, index };
// }
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(completeTodo(0));

//
// import MainContent from './components/mainContent'
// import Item from './components/item'
// import SubItem from './components/subItem'





import {Mod1,Mod2,Mod2Index,Mod2Component,Mod3,Mod4,Mod5,Mod6,Mod7,Mod8,Mod9,Mod10,Mod11} from './components/mod'


render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" testData={num} component={App}>
                <IndexRoute component={Mod1}/>
                <Route path="mod2" component={Mod2}>
                    <IndexRoute component={Mod2Index}/>
                    <Route path=":id" component={Mod2Component} />
                </Route>
                <Route path="mod3" component={Mod3} />
                <Route path="mod4" component={Mod4} />
                <Route path="mod5" component={Mod5} />
                <Route path="mod6" component={Mod6} />
                <Route path="mod7" component={Mod7} />
                <Route path="mod8" component={Mod8} />
                <Route path="mod9" component={Mod9} />
                <Route path="mod10" component={Mod10} />
                <Route path="mod11" component={Mod11} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);


