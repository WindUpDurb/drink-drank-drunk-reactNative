"use strict";

import React, {PropTypes} from "react";
import {View, Text, TouchableNativeFeedback} from "react-native";
//import {MKButton} from "react-native-material-kit";

/*export const RenderButton = ({text, onPress}) => {
    return MKButton.coloredButton()
        .withText(text)
        .withOnPress(() => onPress())
        .build();
};*/

/*
export const RenderButton = MKButton.coloredButton()
    .withText("Stuff")
    .withOnPress(() => console.log("Working"))
    .build();
*/



export const RenderButton = ({style, text, onPress}) => {
    return (
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={style}>
                <Text>
                    {text}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
};

RenderButton.propTypes = {
    style: PropTypes.number,
    text: PropTypes.string,
    onPress: PropTypes.func
};