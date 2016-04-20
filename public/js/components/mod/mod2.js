/**
 * Created by shangwenxue on 2016/4/13.
 */
import '../../../less/mod/mod2.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import { Link,IndexRoute,IndexLink,browserHistory,Redirect } from 'react-router'

class Mod2 extends Component {
    componentDidMount() {
    }
    render(){
        const { mod2Nav,pic } = this.props.data.mod2Data[0];
        return (
            <div className="mod mod2">
                <h2>选择锁屏模板</h2>
                <div className="intro">锁屏壁纸能展现出整个主题的主旨风格。</div>
                {mod2Nav && pic &&
                <div className="modCon">
                    <div className="l">
                        <div className="imgBg">
                            <img src={pic.src} alt=""/>
                        </div>
                        <div className="title">{pic.titel}</div>
                    </div>
                    <div className="con">
                        <div className="nav">
                            {mod2Nav.map((v,k)=>
                            <Link key={k} to={v.url} activeClassName={"active"}>{v.title}</Link>
                            )}
                        </div>
                        {React.cloneElement(this.props.children, {data: this.props.data})}
                    </div>
                </div> || 'mod2'}
            </div>
        )
    }
}

export default Mod2