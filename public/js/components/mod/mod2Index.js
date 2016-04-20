/**
 * Created by shangwenxue on 2016/4/13.
 */
import '../../../less/mod/mod2.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import { Link,IndexRoute,IndexLink,browserHistory,Redirect } from 'react-router'

class Mod2Index extends Component {
    componentDidMount() {
    }
    render(){
        const { mod2Nav,pic } = this.props.data.mod2Data[0];
        return (
            <div className="navCon">
                <div className="l">
                    <div className="lcon">
                        <div className="textIntro">名称：{pic.name}</div>
                        <div className="textIntro">尺寸：{pic.size}</div>
                        <div className="textIntro">格式：{pic.format}</div>
                    </div>
                </div>
                <div className="upLoadBox">
                    <div className="imgBlock"></div>
                    <div className="imgUploadBtn">上传</div>
                </div>
            </div>
        )
    }
}

export default Mod2Index