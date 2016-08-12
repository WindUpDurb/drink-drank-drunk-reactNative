"use strict";

import React, {PropTypes} from "react";
import {View, Text, Dimensions, Image} from "react-native";
import {styles} from "../../Styles";
import {RenderButton} from "./RenderButton";

export const ProfileCard = ({openBeerLog, activeUser}) => {
    let width = Dimensions.get("window").width;
    let height = Dimensions.get("window").height;
    return (
        <View style={[styles.profileCard, {height: height * .5, width: width * .6}]}>
            <Image
                style={styles.circleImage}
                source={{uri: activeUser.photo}}/>
            <Text>{activeUser.name.split(" ")[0]}</Text>

            <RenderButton
                onPress={openBeerLog}
                textStyle={styles.buttonTextWhite}
                style={styles.launchButton}
                text="Beer Log"/>

        </View>
    );
};

ProfileCard.propTypes = {
    openBeerLog: PropTypes.func,
    activeUser: PropTypes.object.isRequired
};