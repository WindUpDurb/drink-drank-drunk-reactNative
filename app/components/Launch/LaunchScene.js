"use strict";

import React, {PropTypes} from "react";
import {View, Text, Button, Image} from "react-native";
import {RenderButton} from "../common/RenderButton";
import {connect} from "react-redux";
import {styles} from "../../Styles";
import {Actions} from "react-native-router-flux";
import * as BeerAPI from "../../actions/BeerAPI";
import {bindActionCreators} from "redux";

class LaunchScene extends React.Component {
    
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.BeerAPI.checkForBeerDirectories()
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

            </Image>
               
        );
    }
}

LaunchScene.propTypes = {
    BeerAPI: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        BeerAPI: bindActionCreators(BeerAPI, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(LaunchScene);