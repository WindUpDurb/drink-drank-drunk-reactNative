"use strict";

import React, {PropTypes} from "react";
import {View, Text, Button, Image} from "react-native";
import {RenderButton} from "../common/RenderButton";
import {connect} from "react-redux";
import {styles} from "../../Styles";
import {Actions} from "react-native-router-flux";
import * as BeerAPI from "../../actions/BeerAPI";
import * as UserActions from "../../actions/UserActions";
import {bindActionCreators} from "redux";
import {GoogleSignin, GoogleSigninButton} from "react-native-google-signin";


class LaunchScene extends React.Component {
    constructor(props) {
        super(props);

        this.signIn = this.signIn.bind(this);
    }

    componentWillMount() {
        this.props.BeerAPI.checkForBeerDirectories();
    }

    signIn() {
        this.props.UserActions.triggerSignIn();
    }

    
    render() {
        return (
                
            <Image 
                style={styles.backgroundImageContainer}
                source={require("../../Images/launchImage.jpg")}>

                <Text>
                    Drink, Drank, Drunk
                </Text>
                <RenderButton
                    style={styles.launchButton}
                    text="Let's find some beers"
                    onPress={Actions.home}/>

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
    BeerAPI: PropTypes.object,
    UserActions: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerAPI: bindActionCreators(BeerAPI, dispatch),
        UserActions: bindActionCreators(UserActions, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LaunchScene);