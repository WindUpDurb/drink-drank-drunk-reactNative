"use strict";

import React, {PropTypes} from "react";
import {View, Text, Button, Image, ActivityIndicator} from "react-native";
import {RenderButton} from "../common/RenderButton";
import {connect} from "react-redux";
import {styles} from "../../Styles";
import {Actions, ActionConst} from "react-native-router-flux";
import * as BeerActions from "../../actions/BeerActions";
import * as UserActions from "../../actions/UserActions";
import {bindActionCreators} from "redux";
import {GoogleSignin, GoogleSigninButton} from "react-native-google-signin";


class LaunchScene extends React.Component {
    constructor(props) {
        super(props);
        this.signIn = this.signIn.bind(this);
    }

    componentWillMount() {
        this.props.BeerActions.loadBeerDirectories();
    }

    componentDidUpdate() {
        console.log("this.props: ", this.props);
        console.log("directory: ", this.props.beerDirectories);
        console.log("user: ", this.props.activeUser);
        if (this.props.activeUser && this.props.beerDirectories) {
            console.log("here");
            Actions.home({type: ActionConst.PUSH});
        }
    }

    signIn() {
        this.props.UserActions.triggerSignIn();
    }
    
    render() {
        return (
            <Image 
                style={styles.backgroundImageContainer}
                source={require("../../Images/launchImage.jpg")}>

                <ActivityIndicator
                    style={[styles.center, styles.loadingIndicator]}
                    animating={this.props.fetching}
                    size="large"/>
                

                <Text style={styles.launchText}>
                    Drink, Drank, Drunk
                </Text>
                <GoogleSigninButton
                    style={{width: 48, height: 48}}
                    size={GoogleSigninButton.Size.Icon}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this.signIn}/>
            </Image>
               
        );
    }
}

LaunchScene.propTypes = {
    BeerActions: PropTypes.object,
    UserActions: PropTypes.object,
    fetching: PropTypes.bool,
    beerDirectories: PropTypes.bool,
    activeUser: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
    let fetching = state.fetching > 0;
    let beerDirectories = !!state.beerDirectories;
    let activeUser = !!state.activeUser;
    console.log("active user: ", activeUser)
    return {
        fetching,
        activeUser,
        beerDirectories
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerActions: bindActionCreators(BeerActions, dispatch),
        UserActions: bindActionCreators(UserActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LaunchScene);