"use strict";

import React, {PropTypes} from "react";
import {View, Text, Dimensions, Image, TouchableHighlight} from "react-native";
import {styles} from "../../Styles";
import Icon from 'react-native-vector-icons/EvilIcons';


export const ToProfileSideTab = ({changeScene}) => {
    let width = Dimensions.get("window").width;
    let toProfileScene = () => changeScene("profile");
    return (
        <TouchableHighlight
            value="profile"
            style={[styles.ToProfileSideTab, {width: width * .15}]}
            onPress={toProfileScene}>
                <Image
                    style={styles.backgroundImageContainer}
                    source={require("../../Images/absurdity.png")}>
                    <Icon name="user" size={50} color="white" />
                </Image>
        </TouchableHighlight>
    );
};

ToProfileSideTab.propTypes = {
    changeScene: PropTypes.func
};