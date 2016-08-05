"use strict";
import React, { PropTypes } from "react";
import {bindActionCreators} from "redux";
import {View, Text} from "react-native";
import HomeScene from "./Home/HomeScene";
import LaunchScene from "./Launch/LaunchScene";
import {connect} from "react-redux";
import {Scene, Router} from "react-native-router-flux";

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <Router>
                <Scene key="root">
                    <Scene
                        key="home"
                        component={HomeScene}/>
                    <Scene
                        key="launch"
                        component={LaunchScene}
                        hideNavBar={true}
                        initial={true}/>
                </Scene>
            </Router>
        );
    }
}


App.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps)(App);
