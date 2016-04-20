import '../less/main.less'
import React, { Component, PropTypes }  from 'react'
import Reflux from 'reflux';
import { render,findDOMNode } from 'react-dom'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { browserHistory, Router,IndexLink, Route,IndexRoute, Link,Redirect } from 'react-router'
import ReactMixin from 'react-mixin';

import {Provider,connect } from 'react-redux';
import App from './containers/app';
import configureStore from './store/configureStore'
import { combineReducers,createStore } from 'redux';



const store = configureStore()

function renderDevTools(store) {
    if (__DEBUG__) {
        let {DevTools, DebugPanel, LogMonitor} = require('redux-devtools/lib/react')

        return (
            <DebugPanel top right bottom>
                <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
        )
    }

    return null
}

render(
    <div>
        <Provider store={store}>
            <App />
        </Provider>
        {renderDevTools(store)}
    </div>,
    document.getElementById('app'))











/*

//const store = configureStore();





/!*
//action
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

function addTodo(text) {
    return { type: ADD_TODO, text };
}

function completeTodo(index) {
    return { type: COMPLETE_TODO, index };
}

function setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter };
}*!/

//reducer

//action
const ADD_TODO = 'ADD_TODO';
const COMPLETE_TODO = 'COMPLETE_TODO';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    console.log(22)
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            console.log(33)
            return action.filter;
        default:
            console.log(4)
            return state;
    }
}

function todos(state = [], action) {
    console.log(44)
    switch (action.type) {
        case ADD_TODO:
            console.log(6)
            return [...state, {
                text: action.text,
                completed: false
            }];
        case COMPLETE_TODO:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            console.log(55)
            return state;
    }
}


const todoApp = combineReducers({
    visibilityFilter,
    todos
});


/!*
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
        const node = findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    }
}

AddTodo.propTypes = {
    onAddClick: PropTypes.func.isRequired
};

class Todo extends Component {
    render() {
        console.log('Todo')
        return (
            <li
                onClick={this.props.onClick} style={{ textDecoration: this.props.completed ? 'line-through' : 'none',
          cursor: this.props.completed ? 'default' : 'pointer' }}>
            {this.props.text}
            </li>
        );
    }
}

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
};

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
class Footer extends Component {
    renderFilter(filter, name) {
        if (filter === this.props.filter) { return name; }
        return (
            <a href='#' onClick={e => { e.preventDefault(); this.props.onFilterChange(filter); }}> {name} </a>
        )
    }
    render() {
        console.log('Footer')
        return (
            <p>
                Show: {' '} {this.renderFilter('SHOW_ALL', 'All')} {', '} {this.renderFilter('SHOW_COMPLETED', 'Completed')} {', '}
                {this.renderFilter('SHOW_ACTIVE', 'Active')} .
            </p>
        );
    }
}
Footer.propTypes = {
    onFilterChange: PropTypes.func.isRequired,
    filter: PropTypes.oneOf(['SHOW_ALL', 'SHOW_COMPLETED', 'SHOW_ACTIVE']).isRequired
};*!/
/!*
class App extends Component {
    render() {
        console.log(this.props);
        const { dispatch, visibleTodos, visibilityFilter } = this.props
        return (
            <div>
                <AddTodo onAddClick={text => dispatch(addTodo(text)) }/>
                <TodoList todos={this.props.visibleTodos} onTodoClick={index => dispatch(completeTodo(index)) }/>
                <Footer filter={visibilityFilter} onFilterChange={nextFilter => dispatch(setVisibilityFilter(nextFilter)) }/>
            </div>
        )
    }
}

/!*
<div>
    <AddTodo onAddClick={text => console.log('add todo', text) }/>
    <TodoList todos={[{ text: 'Use Redux', completed: true }, { text: 'Learn to connect it to React', completed: false }]}
              onTodoClick={todo => console.log('todo clicked', todo) }/>
    <Footer filter='SHOW_ALL' onFilterChange={filter => console.log('filter change', filter) }/>
</div>*!/


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
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    };
}

connect(select)(App);*!/

//store
let store = createStore(todoApp);


let unsubscribe = store.subscribe(() =>
    console.log('--------------------------')
);


function addTodo(text) {
    return { type: ADD_TODO, text };
}

function completeTodo(index) {
    return { type: COMPLETE_TODO, index };
}
store.dispatch(addTodo('Learn about actions'));
store.dispatch(addTodo('Learn about reducers'));
store.dispatch(addTodo('Learn about store'));
store.dispatch(completeTodo(0));

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);



//
// // 发起一系列 action
// store.dispatch(addTodo('Learn about actions'));
// store.dispatch(addTodo('Learn about reducers'));
// store.dispatch(addTodo('Learn about store'));
// store.dispatch(completeTodo(0));
// store.dispatch(completeTodo(1));
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

// unsubscribe();





// http://camsong.github.io/redux-in-chinese/docs/basics/UsageWithReact.html








/!*
var BlueBirdActions = Reflux.createActions([
    "inputChange"
]);
var input = "";

var BlueBirdStore = Reflux.createStore({
    listenables: [BlueBirdActions],
    init: function() { },
    getInitialState: function() { return input; },
    onInputChange: function(newValue) {
        input = newValue;
        this.trigger(input);
    }
});

var BlueBirdStats = React.createClass({
    displayName: "BlueBirdStats",
    mixins: [Reflux.connect(BlueBirdStore, 'somethingElse')],
    handleChange: function(event) {
        console.log(12344)
        BlueBirdActions.inputChange(event.target.value)
    },
    render: function() {
        return (
            <div>
                <input onclick={this.handleChange} value="456" type="text" />
                <div>Body Size: {this.state.somethingElse.length}</div>
                <div>{this.state.somethingElse||123}</div>
            </div>
        );
    }
});



render((
    <BlueBirdStats />
), document.getElementById('app'));


var actions = Reflux.createActions({
    addItem: {},
    deleteItem: {
        // asyncResult: true,
        children: ['completed','failed'],
        preEmit: function (url) {
            // $.ajax(url)
            //     .done(this.completed)
            //     .fail(this.failed);
        },
        shouldEmit:function () {
            return true
        }
    },
    updateItem: {}
});
actions.deleteItem.listen(function (url) {
    //preEmit与shouldEmit 先执行，然后再执行这个函数里的内容
    this.promise($.ajax(url))
});

actions.listenAndPromise(function(url) {
    return $.ajax(url);    // 注意：返回promise对象
});
// 触发消息，监听异步子action的成功与失败
// action这里可以获取到数据，
actions.triggerPromise('/url/add').then(function (data) {
    console.log(data);
}, function () {
    console.log('failed');
});






const ACTIVE = { color: 'red' }

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>APP!</h1>
                <ul>
                    <li><Link      to="/"           activeStyle={ACTIVE}>/</Link></li>
                    <li><IndexLink to="/"           activeStyle={ACTIVE}>/ IndexLink</IndexLink></li>

                    <li><Link      to="/users"      activeStyle={ACTIVE}>/users</Link></li>
                    <li><IndexLink to="/users"      activeStyle={ACTIVE}>/users IndexLink</IndexLink></li>

                    <li><Link      to="/users/ryan" activeStyle={ACTIVE}>/users/ryan</Link></li>
                    <li><Link      to={{ pathname: '/users/ryan', query: { foo: 'bar' } }}
                                   activeStyle={ACTIVE}>/users/ryan?foo=bar</Link></li>

                    <li><Link      to="/about"      activeStyle={ACTIVE}>/about</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <h2>Index!</h2>
            </div>
        )
    }
}

class Users extends React.Component {
    render() {
        return (
            <div>
                <h2>Users</h2>
                {this.props.children}
            </div>
        )
    }
}

class UsersIndex extends React.Component {
    render() {
        return (
            <div>
                <h3>UsersIndex</h3>
            </div>
        )
    }
}

class User extends React.Component {
    render() {
        return (
            <div>
                <h3>User {this.props.params.id}</h3>
            </div>
        )
    }
}

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
            </div>
        )
    }
}

render((
    <div>
        <Provider store={store}>
            <Router history={browserHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={Index}/>
                    <Route path="/about" component={About}/>
                    <Route path="users" component={Users}>
                        <IndexRoute component={UsersIndex}/>
                        <Route path=":id" component={User}/>
                    </Route>
                </Route>
            </Router>
        </Provider>
    </div>
), document.getElementById('app'))





const App = React.createClass({
    componentWillUnmount(){
        console.log(5555555555)
    },
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/dashboard" activeClassName="active">Dashboard</Link></li>
                    <li><Link to="/form" activeClassName="active">Form</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})

const Dashboard = React.createClass({
    componentWillUnmount(){
        console.log(333333333)
    },
    render() {
        return <h1>Dashboard</h1>
    }
})

const Form = React.createClass({
    componentWillUnmount(){
        console.log(3222222222222222)
    },
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    componentWillMount() {
        console.log(6666666666)
        this.context.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    },

    getInitialState() {
        return {
            textValue: 'ohai'
        }
    },

    routerWillLeave() {
        if (this.state.textValue)
            return 'You have unsaved information, are you sure you want to leave this page?'
    },

    handleChange(event) {
        this.setState({
            textValue: event.target.value
        })
    },

    handleSubmit(event) {
        event.preventDefault()

        this.setState({
            textValue: ''
        }, () => {
            this.context.router.push('/')
        })
    },

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p>Click the dashboard link with text in the input.</p>
                    <input type="text" ref="userInput" value={this.state.textValue} onChange={this.handleChange} />
                    <button type="submit">Go</button>
                </form>
            </div>
        )
    }
})

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="dashboard" component={Dashboard} />
            <Route path="form" component={Form} />
        </Route>
    </Router>
), document.getElementById('app'))











class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/user/123" activeClassName="active">Bob</Link></li>
                    <li><Link to="/user/abc" activeClassName="active">Sally</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class User extends React.Component {
    render() {
        const { userID } = this.props.params

        return (
            <div className="User">
                <h1>User id: {userID}</h1>
                <ul>
                    <li><Link to={`/user/${userID}/tasks/foo`} activeClassName="active">foo task</Link></li>
                    <li><Link to={`/user/${userID}/tasks/bar`} activeClassName="active">bar task</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

class Task extends React.Component {
    render() {
        const { userID, taskID } = this.props.params

        return (
            <div className="Task">
                <h2>User ID: {userID}</h2>
                <h3>Task ID: {taskID}</h3>
            </div>
        )
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="user/:userID" component={User}>
                <Route path="tasks/:taskID" component={Task} />
                <Redirect from="todos/:taskID" to="tasks/:taskID" />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'))




class App extends React.Component {
    render() {
        const { pathname } = this.props.location

        // Only take the first-level part of the path as key, instead of the whole path.
        const key = pathname.split('/')[1] || 'root'

        return (
            <div>
                <ul>
                    <li><Link to="/page1">Page 1</Link></li>
                    <li><Link to="/page2">Page 2</Link></li>
                </ul>
                <ReactCSSTransitionGroup
                    component="div" transitionName="swap"
                    transitionEnterTimeout={500} transitionLeaveTimeout={500}
                >
                    {React.cloneElement(this.props.children || <div />, { key: key })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

class Page1 extends React.Component {
    render() {
        const { pathname } = this.props.location

        return (
            <div className="Image">
                <h1>Page 1</h1>
                <ul>
                    <li><Link to="/page1/tab1">Tab 1</Link></li>
                    <li><Link to="/page1/tab2">Tab 2</Link></li>
                </ul>
                <ReactCSSTransitionGroup
                    component="div" transitionName="example"
                    transitionEnterTimeout={500} transitionLeaveTimeout={500}
                >
                    {React.cloneElement(this.props.children || <div/>, { key: pathname })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

class Page2 extends React.Component {
    render() {
        const { pathname } = this.props.location

        return (
            <div className="Image">
                <h1>Page 2</h1>
                <ul>
                    <li><Link to="/page2/tab1">Tab 1</Link></li>
                    <li><Link to="/page2/tab2">Tab 2</Link></li>
                </ul>
                <ReactCSSTransitionGroup
                    component="div" transitionName="example"
                    transitionEnterTimeout={500} transitionLeaveTimeout={500}
                >
                    {React.cloneElement(this.props.children || <div/>, { key: pathname })}
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

class Tab1 extends React.Component {
    render() {
        return (
            <div className="Image">
                <h2>Tab 1</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        )
    }
}

class Tab2 extends React.Component {
    render() {
        return (
            <div className="Image">
                <h2>Tab 2</h2>
                <p>Consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        )
    }
}


render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="page1" component={Page1}>
                <Route path="tab1" component={Tab1} />
                <Route path="tab2" component={Tab2} />
            </Route>
            <Route path="page2" component={Page2}>
                <Route path="tab1" component={Tab1} />
                <Route path="tab2" component={Tab2} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));







const App = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },

    getInitialState() {
        return {
            tacos: [
                { name: 'duck confit' },
                { name: 'carne asada' },
                { name: 'shrimp' }
            ]
        }
    },

    addTaco() {
        let name = prompt('taco name?')

        this.setState({
            tacos: this.state.tacos.concat({ name })
        })
    },

    handleRemoveTaco(removedTaco) {
        this.setState({
            tacos: this.state.tacos.filter(function (taco) {
                return taco.name != removedTaco
            })
        })

        this.context.router.push('/')
    },

    render() {
        let links = this.state.tacos.map(function (taco, i) {
            return (
                <li key={i}>
                    <Link to={`/taco/${taco.name}`}>{taco.name}</Link>
                </li>
            )
        })
        return (
            <div className="App">
                <button onClick={this.addTaco}>Add Taco</button>
                <ul className="Master">
                    {links}
                </ul>
                <div className="Detail">
                    {this.props.children && React.cloneElement(this.props.children, {
                        onRemoveTaco: this.handleRemoveTaco
                    })}
                </div>
            </div>
        )
    }
})

const Taco = React.createClass({
    remove() {
        this.props.onRemoveTaco(this.props.params.name)
    },

    render() {
        return (
            <div className="Taco">
                <h1>{this.props.params.name}</h1>
                <button onClick={this.remove}>remove</button>
            </div>
        )
    }
})

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="taco/:name" component={Taco} />
        </Route>
    </Router>
), document.getElementById('app'))



const PICTURES = [
    { id: 0, src: 'http://placekitten.com/601/601' },
    { id: 1, src: 'http://placekitten.com/610/610' },
    { id: 2, src: 'http://placekitten.com/620/620' }
]

const Modal = React.createClass({
    styles: {
        position: 'fixed',
        top: '20%',
        right: '20%',
        bottom: '20%',
        left: '20%',
        padding: 20,
        boxShadow: '0px 0px 150px 130px rgba(0, 0, 0, 0.5)',
        overflow: 'auto',
        background: '#fff'
    },

    render() {
        return (
            <div style={this.styles}>
                <p><Link to={this.props.returnTo}>Back</Link></p>
                {this.props.children}
            </div>
        )
    }
})


const Index = React.createClass({
    render() {
        return (
            <div>
                <p>
                    The url `/pictures/:id` can be rendered anywhere in the app as a modal.
                    Simply put `modal: true` in the location descriptor of the `to` prop.
                </p>

                <p>
                    Click on an item and see its rendered as a modal, then copy/paste the
                    url into a different browser window (with a different session, like
                    Chrome -> Firefox), and see that the image does not render inside the
                    overlay. One URL, two session dependent screens :D
                </p>

                <div>
                    {PICTURES.map(picture => (
                        <Link key={picture.id} to={{
                pathname: `/pictures/${picture.id}`,
                state: { modal: true, returnTo: this.props.location.pathname }
              }}
                        >
                            <img style={{ margin: 10 }} src={picture.src} height="100" />
                        </Link>
                    ))}
                </div>

                <p><Link to="/some/123/deep/456/route">Go to some deep route</Link></p>

            </div>
        )
    }
})

const Deep = React.createClass({
    render() {
        return (
            <div>
                <p>You can link from anywhere really deep too</p>
                <p>Params stick around: {this.props.params.one} {this.props.params.two}</p>
                <p>
                    <Link to={{
            pathname: `/pictures/0`,
            state: { modal: true, returnTo: this.props.location.pathname }
          }}>
                        Link to picture with Modal
                    </Link><br/>
                    <Link to={`/pictures/0`}>
                        Without modal
                    </Link>
                </p>
            </div>
        )
    }
})

const Picture = React.createClass({
    render() {
        return (
            <div>
                <img src={PICTURES[this.props.params.id].src} style={{ height: '80%' }} />
            </div>
        )
    }
})

const App = React.createClass({
    componentWillReceiveProps(nextProps) {
        console.log('app componentWillReceiveProps')
        // if we changed routes...
        console.log(nextProps)
        if ((
                nextProps.location.key !== this.props.location.key &&
                nextProps.location.state &&
                nextProps.location.state.modal
            )) {
            // save the old children (just like animation)
            this.previousChildren = this.props.children
        }
    },

    render() {
        console.log('app render')
        let { location } = this.props

        let isModal = (
            location.state &&
            location.state.modal &&
            this.previousChildren
        )
        console.log(isModal);

        return (
            <div>
                <h1>Pinterest Style Routes</h1>

                <div>
                    {isModal ?
                        this.previousChildren :
                        this.props.children
                    }

                    {isModal && (
                        <Modal isOpen={true} returnTo={location.state.returnTo}>
                            {this.props.children}
                        </Modal>
                    )}
                </div>
            </div>
        )
    }
})

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Index}/>
            <Route path="/pictures/:id" component={Picture}/>
            <Route path="/some/:one/deep/:two/route" component={Deep}/>
        </Route>
    </Router>
), document.getElementById('app'))

class User extends React.Component {
    componentDidMount(){
        console.log('user加载')
        console.log(1111111111)
    }
    componentWillUnmount(){
        console.log('user卸载')
        console.log(222222222222)
    }
    render() {
        let { userID } = this.props.params
        let { query } = this.props.location
        let age = query && query.showAge ? '33' : ''

        return (
            <div className="User">
                <h1>User id: {userID}</h1>
                {age}
            </div>
        )
    }
}

class Enter extends React.Component {
    render(){
        return (
            <div>enter enter Ok....</div>
        )
    }
}

class App extends React.Component {
    render() {
        console.log('app加载')
        console.log('-----------')
        return (
            <div>
                <ul>
                    <li><Link to="/user/bob" activeClassName="active">Bob</Link></li>
                    <li><Link to={{ pathname: '/user/bob', query: { showAge: true } }} activeClassName="active">Bob With Query Params</Link></li>
                    <li><Link to="/user/sally" activeClassName="active">Sally</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="user/:userID" component={User} />
        </Route>
    </Router>
), document.getElementById('app'));


const data = [
    {
        name: 'Tacos',
        description: 'A taco (/ˈtækoʊ/ or /ˈtɑːkoʊ/) is a traditional Mexican dish composed of a corn or wheat tortilla folded or rolled around a filling. A taco can be made with a variety of fillings, including beef, pork, chicken, seafood, vegetables and cheese, allowing for great versatility and variety. A taco is generally eaten without utensils and is often accompanied by garnishes such as salsa, avocado or guacamole, cilantro (coriander), tomatoes, minced meat, onions and lettuce.',
        items: [
            { name: 'Carne Asada', price: 7 },
            { name: 'Pollo', price: 6 },
            { name: 'Carnitas', price: 6 }
        ]
    },
    {
        name: 'Burgers',
        description: 'A hamburger (also called a beef burger, hamburger sandwich, burger or hamburg) is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bun. Hamburgers are often served with lettuce, bacon, tomato, onion, pickles, cheese and condiments such as mustard, mayonnaise, ketchup, relish, and green chile.',
        items: [
            { name: 'Buffalo Bleu', price: 8 },
            { name: 'Bacon', price: 8 },
            { name: 'Mushroom and Swiss', price: 6 }
        ]
    },
    {
        name: 'Drinks',
        description: 'Drinks, or beverages, are liquids intended for human consumption. In addition to basic needs, beverages form part of the culture of human society. Although all beverages, including juice, soft drinks, and carbonated drinks, have some form of water in them, water itself is often not classified as a beverage, and the word beverage has been recurrently defined as not referring to water.',
        items: [
            { name: 'Lemonade', price: 3 },
            { name: 'Root Beer', price: 4 },
            { name: 'Iron Port', price: 5 }
        ]
    }
];

const dataMap = data.reduce(function (map, category) {
    category.itemsMap = category.items.reduce(function (itemsMap, item) {
        itemsMap[item.name] = item
        return itemsMap
    }, {})
    map[category.name] = category
    return map
}, {});

const getAll = function () {
    return data
}

const lookupCategory = function (name) {
    return dataMap[name]
}

const lookupItem = function (category, item) {
    return dataMap[category].itemsMap[item]
}


class Category extends React.Component {
    render() {
        const category = lookupCategory(this.props.params.category)

        return (
            <div>
                <h1>{category.name}</h1>
                {this.props.children || (
                    <p>{category.description}</p>
                )}
            </div>
        )
    }
}

class CategorySidebar extends React.Component {
    render() {
        const category = lookupCategory(this.props.params.category)

        return (
            <div>
                <Link to="/">◀︎ Back</Link>
                <h2>{category.name} Items</h2>
                <ul>
                    {category.items.map((item, index) => (
                        <li key={index}>
                            <Link to={`/category/${category.name}/${item.name}`}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Sidebar</h1>
                <p>
                    Routes can have multiple components, so that all portions of your UI
                    can participate in the routing.
                </p>
            </div>
        )
    }
}

class IndexSidebar extends React.Component {
    render() {
        return (
            <div>
                <h2>Categories</h2>
                <ul>
                    {getAll().map((category, index) => (
                        <li key={index}>
                            <Link to={`/category/${category.name}`}>{category.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

class Item extends React.Component {
    render() {
        const { category, item } = this.props.params
        const menuItem = lookupItem(category, item)

        return (
            <div>
                <h1>{menuItem.name}</h1>
                <p>${menuItem.price}</p>
            </div>
        )
    }
}

class App extends React.Component {
    render() {
        const { content, sidebar } = this.props;
        console.log(content || 33333333333333333333333333333333333333333);
        console.log(sidebar || '--------------');

        return (
            <div>
                <div className="Sidebar">
                    {sidebar || <IndexSidebar />}
                </div>
                <div className="Content">
                    {content || <Index />}
                </div>
            </div>
        )
    }
};

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="category/:category" components={{ content: Category, sidebar: CategorySidebar }}>
                <Route path=":item" component={Item} />
            </Route>
        </Route>
    </Router>
), document.getElementById('app'));*!/
*/
