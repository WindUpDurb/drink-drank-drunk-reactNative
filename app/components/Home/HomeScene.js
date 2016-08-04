"use strict";
import React, { PropTypes } from "react";
import {bindActionCreators} from "redux";
import {View, Text} from "react-native";
import {connect} from "react-redux";

class HomeScene extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>
                    Some Stuff

                </Text>
            </View>
        );
    }
}


HomeScene.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {

    };
}

export default connect(mapStateToProps)(HomeScene);
