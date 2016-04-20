/**
 * Created by shangwenxue on 2016/4/13.
 */
import '../../../less/mod/mod1.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import { Link,IndexRoute,IndexLink,browserHistory,Redirect } from 'react-router'

class Mod1 extends Component {
    componentDidMount() {
        $('#screenBox').on('click','li',function () {
            $(this).addClass('active').siblings().removeClass('active')
        })
    }
    render(){
        const { data } = this.props;
        return (
            <div className="mod1">
                <h2>选择锁屏模板</h2>
                <div className="intro">必须选择一个模板，才可以进行后续步骤。</div>
                <ul id="screenBox">
                    {data.mod1Data && data.mod1Data.map((val,key) =>
                        <li key={key}>
                            <div className="box">
                                <img className="bg" src={val.src} alt=""/>
                            </div>
                            <div className="title">{val.title}</div>
                        </li>
                    )}
                    <li>
                        <div className="addScreenBtn"></div>
                        <div className="title">DIY</div>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Mod1