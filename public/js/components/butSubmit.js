import '../../less/butSubmit.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
class ButSubmit extends Component {
    render() {
        return (
            <div className="miuiBtnSubmit">
                <div className="process" style={{width:'10%'}}></div>
                <div className="processborder"></div>
                <div>完成度10%</div>
            </div>
        );
    }
}

export default ButSubmit