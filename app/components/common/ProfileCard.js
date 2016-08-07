"use strict";

import React, {PropTypes} from "react";
import {View, Text, Dimensions, Image} from "react-native";
import {styles} from "../../Styles";



export const ProfileCard = ({activeUser}) => {
    let width = Dimensions.get("window").width;
    let height = Dimensions.get("window").height;
    console.log("Acitve User: ", activeUser)
    return (
        <View style={[styles.profileCard, {height: height * .5, width: width * .6}]}>
            <Image
                style={styles.circleImage}
                source={{uri: activeUser.photo}}/>
            <Text>{activeUser.name.split(" ")[0]}</Text>
        </View>
    );
};

ProfileCard.propTypes = {
    activeUser: PropTypes.object.isRequired
};