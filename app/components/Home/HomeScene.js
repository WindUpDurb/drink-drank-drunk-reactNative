"use strict";
import React, { PropTypes } from "react";
import {bindActionCreators} from "redux";
import {View, Text} from "react-native";
import {SideNav} from "../common/SideNav";
import {Actions, ActionConst} from "react-native-router-flux";
import {styles} from "../../Styles";
import {connect} from "react-redux";

class HomeScene extends React.Component {
    constructor(props) {
        super(props);
        this.changeSceneTo = this.changeSceneTo.bind(this);
    }
    
    changeSceneTo(event) {
        if (event === "profile") Actions.profile({type: ActionConst.PUSH});
        if (event === "beerDirectory") Actions.beerDirectory({type: ActionConst.PUSH});
    }

    render() {
        return (
            <View style={styles.homeOuterView}>
                <SideNav
                    changeScene={this.changeSceneTo}/>
                
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
