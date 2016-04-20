import '../../less/nav.less'
import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
import { Link,IndexRoute,IndexLink,browserHistory,Redirect } from 'react-router'

class Nav extends Component {
    componentDidMount() {
        $('#nav').on('click','li',function () {
            $(this).addClass('active').siblings().removeClass('active')
        })
    }
    render() {
        const { data } = this.props;
        console.log('-----------------------------------')
        return (
            <ul id="nav" className="miuiNav">
                {data.map((val, key) =>
                    <li className={val.class} key={key}>
                        <Link key={key} className='title' to={val.url}>{val.title}</Link>
                        {val.items &&
                        <div className="subBox" data-tag="sub">
                            {val.items.map(
                                (v,k)=><Link key={k} className={v.class} to={v.url} activeClassName={"active"}>{v.title}</Link>
                            )}
                        </div>
                        }
                    </li>
                )}
            </ul>
        )
    }
}

Nav.propTypes = {
    data: PropTypes.array.isRequired
};

export default Nav