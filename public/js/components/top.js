import '../../less/top.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
class Top extends Component {
    render() {
        return (
            <div className="miuiTop">
                <span className="new">新建</span>
                <span className="export">导出</span>
                <span className="subject">我的主题</span>
            </div>
        );
    }
}

export default Top