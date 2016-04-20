/**
 * Created by shangwenxue on 2016/4/13.
 */
import '../../../less/mod/mod2.less'
import '../../../less/mod/mod5.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import { Link,IndexRoute,IndexLink,browserHistory,Redirect } from 'react-router'

class Mod5 extends Component {
    componentDidMount() {
    }
    render(){
        const { mod5Nav,pic } = this.props.data.mod5Data[0];
        return (
            <div className="mod mod2 mod5">
                <h2>全局设置</h2>
                <div className="intro">图标包含文件夹、主题LOGO、第三方图标美化，主题LOGO是主题对外的名片。</div>
                {mod5Nav && pic &&
                <div className="modCon">
                    <div className="l">
                        <div className="imgBg">
                            <img src={pic.src} alt=""/>
                        </div>
                        <div className="title">{pic.titel}</div>
                    </div>
                    <div className="con">
                        <div className="nav">
                            {mod5Nav.map((v,k)=>
                                <Link key={k} to={v.url} activeClassName={"active"}>{v.title}</Link>
                            )}
                        </div>
                        <div className="navCon">
                            asfdsafdsafasf
                        </div>
                    </div>
                </div> || 'mod5'}
            </div>
        )
    }
}

export default Mod5