/**
 * Created by shangwenxue on 2016/4/13.
 */
import '../../../less/mod/mod2.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import { Link,IndexRoute,IndexLink,browserHistory,Redirect } from 'react-router'



import {Mod2Index} from './mod2Index'

class Mod2Component extends Component {
    componentDidMount() {
    }
    render(){
        return (
            <div className="navCon">
                {this.props.params.id}
            </div>
        )
    }
}

export default Mod2Component