/**
 * Created by shangwenxue on 2016/4/12.
 */
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import {Mod1,Mod2,Mod3,Mod4,Mod5,Mod6,Mod7,Mod8,Mod9,Mod10,Mod11} from '../components/mod'
class Item extends Component {
    render() {
        const { id } = this.props.params
        const { query,pathname } = this.props.location
        return (
            <div>
                {query.category === 'one' && id==1 && <Mod1 data={this.props.data.mod1Data} />}
                {query.category === 'one' && id==2 && <Mod2 data={this.props.data.mod2Data} />}
                {query.category === 'two' && id==3 && <Mod3 />}
                {query.category === 'two' && id==4 && <Mod4 />}
                {query.category === 'three' && id==5 && <Mod5 />}
                {query.category === 'three' && id==6 && <Mod6 />}
                {query.category === 'three' && id==7 && <Mod7 />}
                {query.category === 'four' && id==8 && <Mod8 />}
                {query.category === 'five' && id==9 && <Mod9 />}
                {query.category === 'six' && id==10 && <Mod10 />}
                {query.category === 'seven' && id==11 && <Mod11 />}
            </div>
        );
    }
}

export default Item