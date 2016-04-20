/**
 * Created by shangwenxue on 2016/4/12.
 */
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import {Mod1,Mod2,Mod3,Mod4,Mod5,Mod6,Mod7,Mod8,Mod9,Mod10,Mod11} from '../components/mod'
class SubItem extends Component {
    render() {
        const { id } = this.props.params
        const { mod2Nav, pic} = this.props.params
        const { query,pathname } = this.props.location
        return (
            <div>
                <h2>123选择锁屏模板</h2>
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
                            {mod2Nav.map((v, k)=>
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
                </div> || 'mod2'}
            </div>
        );
    }
}

export default SubItem