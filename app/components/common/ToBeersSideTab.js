"use strict";

import React from "react";
import {View, Text, Dimensions, Image} from "react-native";
import {styles} from "../../Styles";


export const ToBeersSideTab = () => {
    let width = Dimensions.get("window").width;
    return (
        <View style={[styles.toBeersSideTab, {width: width * .25}]}>
            <Image
                style={styles.backgroundImageContainer}
                source={require("../../Images/absurdity.png")}>
                <Image source={require("../../Images/beerButton.png")} />
            </Image>
        </View>
    );
};