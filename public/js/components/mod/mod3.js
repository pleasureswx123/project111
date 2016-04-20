/**
 * Created by shangwenxue on 2016/4/13.
 */
import '../../../less/mod/mod2.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import { Link,IndexRoute,IndexLink,browserHistory,Redirect } from 'react-router'

class Mod3 extends Component {
    componentDidMount() {
    }
    render(){
        const { mod3Nav,pic } = this.props.data.mod3Data[0];
        return (
            <div className="mod mod2">
                <h2>选择锁屏模板</h2>
                <div className="intro">桌面壁纸和图标布局、遮挡。手机滑动到各屏可预览。</div>
                {mod3Nav && pic &&
                <div className="modCon">
                    <div className="l">
                        <div className="imgBg">
                            <img src={pic.src} alt=""/>
                        </div>
                        <div className="title">{pic.titel}</div>
                    </div>
                    <div className="con">
                        <div className="nav">
                            {mod3Nav.map((v,k)=>
                                <Link key={k} to={v.url} activeClassName={"active"}>{v.title}</Link>
                            )}
                        </div>
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
                    </div>
                </div> || 'mod3'}
            </div>
        )
    }
}

export default Mod3