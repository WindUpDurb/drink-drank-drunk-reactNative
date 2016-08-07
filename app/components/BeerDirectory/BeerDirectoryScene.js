"use strict";

import React, {PropTypes} from "react";
import {View, Text, Button, Image, ActivityIndicator} from "react-native";
import {connect} from "react-redux";
import {styles} from "../../Styles";
import {Actions, ActionConst} from "react-native-router-flux";
import {bindActionCreators} from "redux";
import {SideNav} from "../common/SideNav";
import {BeerDirectoryMainView} from "./BeerDirectoryMainView";


class BeerDirectoryScene extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View style={styles.profileOuterView}>
                <SideNav />
                <BeerDirectoryMainView 
                    beerDirectories={this.props.beerDirectories}/>
            </View>
        );
    }
}

BeerDirectoryScene.propTypes = {
    BeerActions: PropTypes.object,
    UserActions: PropTypes.object,
    fetching: PropTypes.bool,
    beerDirectories: PropTypes.object.isRequired,
    activeUser: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        beerDirectories: state.beerDirectories,
        activeUser: state.activeUser
    };
}

export default connect(mapStateToProps)(BeerDirectoryScene);