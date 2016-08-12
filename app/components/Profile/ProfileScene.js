"use strict";

import React, {PropTypes} from "react";
import {View, Text, Button, Image,
        ToastAndroid, ActivityIndicator} from "react-native";
import {connect} from "react-redux";
import {styles} from "../../Styles";
import {Actions, ActionConst} from "react-native-router-flux";
import {bindActionCreators} from "redux";
import {SideNav} from "../common/SideNav";
import {ProfileMainView} from "./ProfileMainView";
import * as FunctionTools from "../../actions/FunctionTools";


class ProfileScene extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showBeerLog: false
        };
        this.openBeerLog = this.openBeerLog.bind(this);
    }
    
    openBeerLog() {
        if (!this.props.userBeerData.length) {
            ToastAndroid.show("You have no beers logged.", ToastAndroid.SHORT)
        } else {
            this.setState({showBeerLog: !this.state.showBeerLog});
        }
    }
    
    render() {
        return (
            <View style={styles.profileOuterView}>
                <SideNav />
                <ProfileMainView
                    showBeerLog={this.state.showBeerLog}
                    userBeerData={this.props.userBeerData}
                    openBeerLog={this.openBeerLog}
                    activeUser={this.props.activeUser}/>
            </View>
        );
    }
}

ProfileScene.propTypes = {
    BeerActions: PropTypes.object,
    UserActions: PropTypes.object,
    fetching: PropTypes.bool,
    userBeerData: PropTypes.array,
    activeUser: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    console.log("active user: ", state.activeUser);
    let activeUserCopy = Object.assign({}, state.activeUser);
    let userBeerData = FunctionTools.extractAllBeers(activeUserCopy.userBeerData);
    return {
        activeUser: activeUserCopy,
        userBeerData
    };
}

export default connect(mapStateToProps)(ProfileScene);