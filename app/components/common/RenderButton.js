"use strict";

import React, {PropTypes} from "react";
import {View, Text, TouchableNativeFeedback} from "react-native";


export const RenderButton = ({style, text, textStyle, onPress}) => {
    return (
        <TouchableNativeFeedback
            onPress={onPress}
            background={TouchableNativeFeedback.SelectableBackground()}>
            <View style={style}>
                <Text style={textStyle}>
                    {text}
                </Text>
            </View>
        </TouchableNativeFeedback>
    );
};




RenderButton.propTypes = {
    style: PropTypes.number,
    textStyle: PropTypes.number,
    text: PropTypes.string,
    onPress: PropTypes.func
};
