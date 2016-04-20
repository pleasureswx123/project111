import React, { Component, PropTypes } from 'react';
import { render,findDOMNode } from 'react-dom'
class MainContent extends Component {
    render() {
        return (
            <div>
                {React.cloneElement(this.props.children, {data: this.props.data}) || (
                    <div>mainContent</div>
                )}
            </div>
        );
    }
}

export default MainContent