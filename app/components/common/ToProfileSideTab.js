"use strict";

import React, {PropTypes} from "react";
import {View, Text, Dimensions, Image, TouchableHighlight} from "react-native";
import {styles} from "../../Styles";


export const ToProfileSideTab = ({changeScene}) => {
    let width = Dimensions.get("window").width;
    let toProfileScene = () => changeScene("profile");
    return (
        <TouchableHighlight
            value="profile"
            style={[styles.ToProfileSideTab, {width: width * .25}]}
            onPress={toProfileScene}>
                <Image
                    style={styles.backgroundImageContainer}
                    source={require("../../Images/absurdity.png")}>
                    <Image source={require("../../Images/userButton.png")} />
                </Image>
        </TouchableHighlight>
    );
};

ToProfileSideTab.propTypes = {
    changeScene: PropTypes.func
};