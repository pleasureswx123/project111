'use strict';
import {connect} from 'react-redux';
import * as CounterActions from './redux/action';
import {bindActionCreators} from 'redux';


import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View,
    ScrollView,
    RefreshControl,
    TouchableOpacity,
    Dimensions,
    PixelRatio
} from 'react-native';


let {width, height} = Dimensions.get('window');

let Search = require('./search'),
    Swiper = require('./swiper'),
    FocusImg = require('./focus'),
    Product = require('./product'),
    Nav = require('./nav');


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            opacity: 0,
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(1)).map(
                (val, i) => ({text: 'Initial row' + i, clicks: 0})),
        }
    }


    _onRefresh() {
        this.setState({isRefreshing: true});

        setTimeout(() => {
            const rowData = Array.from(new Array(1))
                .map((val, i) => ({
                    text: 'Loaded row' + (+this.state.loaded + i),
                    clicks: 0,
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 1,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 2000);
    }


    _onClick(row) {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData,
        });
    }

    _changeSearchBg(nativeObj) {
        var scrollVal = nativeObj.nativeEvent.contentOffset.y,
            val = (scrollVal / 250).toFixed(1);
        if (val <= 0) {
            this.setState({opacity: 0});
        } else if (val >= 0.9) {
            this.setState({opacity: 0.9});
        } else {
            this.setState({opacity: val});
        }
    }

    render() {

        // console.warn(this.props.ajaxData)
        this.props.ajaxData('121212');


        return (
            <View style={styles.container}>
                <ScrollView contentContainerStyle={styles.contentContainer}
                            scrollEventThrottle={200}
                            onScroll={this._changeSearchBg.bind(this)}
                            refreshControl={
                <RefreshControl
                  refreshing={this.state.isRefreshing}
                  onRefresh={this._onRefresh.bind(this)}
                  tintColor="#ff0000"
                  title="Loading..."
                  colors={['#ff0000', '#00ff00', '#0000ff']}
                  progressBackgroundColor="#ffff00"
                />
              }
                >
                    <Swiper />
                    <Nav />
                    <FocusImg />
                    <Product />
                </ScrollView>
                {!this.state.isRefreshing && <Search opacity={this.state.opacity}/>}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {}
});

const mapStateToProps = state => ({data: state});
const mapDispatchToProps = dispatch => bindActionCreators(CounterActions, dispatch)


export default connect(mapStateToProps, mapDispatchToProps)(Index);
