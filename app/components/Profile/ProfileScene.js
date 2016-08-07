"use strict";

import React, {PropTypes} from "react";
import {View, Text, Button, Image, ActivityIndicator} from "react-native";
import {connect} from "react-redux";
import {styles} from "../../Styles";
import {Actions, ActionConst} from "react-native-router-flux";
import {bindActionCreators} from "redux";
import {SideNav} from "../common/SideNav";
import {ProfileMainView} from "./ProfileMainView";


class ProfileScene extends React.Component {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <View style={styles.profileOuterView}>
                <SideNav />
                <ProfileMainView
                    activeUser={this.props.activeUser}/>
            </View>
        );
    }
}

ProfileScene.propTypes = {
    BeerActions: PropTypes.object,
    UserActions: PropTypes.object,
    fetching: PropTypes.bool,
    activeUser: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  
    return {
        activeUser: state.activeUser
    };
}

export default connect(mapStateToProps)(ProfileScene);