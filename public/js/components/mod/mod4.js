/**
 * Created by shangwenxue on 2016/4/13.
 */
import '../../../less/mod/mod2.less'
import '../../../less/mod/mod4.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import { Link,IndexRoute,IndexLink,browserHistory,Redirect } from 'react-router'

class Mod4 extends Component {
    componentDidMount() {
    }
    render(){
        const { mod4Con,pic } = this.props.data.mod4Data[0];
        return (
            <div className="mod mod2 mod4">
                <h2>编写桌面文字颜色</h2>
                <div className="intro">锁屏文字颜色可以突出展现主题的主旨和风格。</div>
                {mod4Con && pic &&
                <div className="modCon">
                    <div className="l">
                        <div className="imgBg">
                            <img src={pic.src} alt=""/>
                        </div>
                        <div className="title">{pic.titel}</div>
                    </div>
                    <div className="con">
                        <div className="nav">
                            {mod4Con.title}
                        </div>
                        <div className="navCon">
                            {mod4Con.con.map((v,k)=>
                                <div className="colorBox" key={k}>
                                    <div>{v.text}</div>
                                    <div className="text"># <input type="text" /> 颜色： <span className="colorArea" style={{backgroundColor:v.color}}>&nbsp;&nbsp;&nbsp;&nbsp;</span></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div> || 'mod4'}
            </div>
        )
    }
}

export default Mod4