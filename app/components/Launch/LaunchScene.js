"use strict";

import React, {PropTypes} from "react";
import {View, Text, Image} from "react-native";
import {connect} from "react-redux";
import {styles} from "../../Styles";

class LaunchScene extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
                <View>
                    <Image source={require("../../Images/launchImage.jpg")}/>
                </View>
        );
    }
}

LaunchScene.propTypes = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        
    };
}



export default connect(mapStateToProps)(LaunchScene);