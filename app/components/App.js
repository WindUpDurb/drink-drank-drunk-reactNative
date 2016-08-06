"use strict";
import React, { PropTypes } from "react";
import {bindActionCreators} from "redux";
import {View, Text, ActivityIndicator} from "react-native";
import HomeScene from "./Home/HomeScene";
import LaunchScene from "./Launch/LaunchScene";
import {connect} from "react-redux";
import {styles} from "../Styles";


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>jklsfdajkl</Text>
            </View>
        );
    }
}


App.propTypes = {

};

function mapStateToProps(state, ownProps) {
    console.log("Own Props: ", ownProps);
    console.log("state: ", state);
    return {
        children: ownProps.children
    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps)(App);
