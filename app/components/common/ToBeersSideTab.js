"use strict";

import React, {PropTypes} from "react";
import {View, Text, Dimensions, Image, TouchableHighlight} from "react-native";
import {styles} from "../../Styles";
import Icon from 'react-native-vector-icons/FontAwesome';


export const ToBeersSideTab = ({changeScene}) => {
    let width = Dimensions.get("window").width;
    let toProfileScene = () => changeScene("beerDirectory");
    return (
        <TouchableHighlight onPress={toProfileScene}
            style={[styles.toBeersSideTab, {width: width * .15}]}>
            <Image
                style={styles.backgroundImageContainer}
                source={require("../../Images/absurdity.png")}>
                <Icon name="beer" size={37} color="white" />
            </Image>
        </TouchableHighlight>
    );
};

ToBeersSideTab.propTypes = {
    changeScene: PropTypes.func
};