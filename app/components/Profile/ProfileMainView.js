"use strict";

import React, {PropTypes} from "react";
import {View, Text, Button, Image, Dimensions} from "react-native";
import {styles} from "../../Styles";
import {ProfileCard} from "../common/ProfileCard";



export const ProfileMainView = ({activeUser}) => {
    let width = Dimensions.get("window").width;
    return (
        <Image
            style={[styles.backgroundImageContainer, {width: width * .75}]}
            source={require("../../Images/profileScene.jpg")}>
        <ProfileCard
            activeUser={activeUser}/>
        </Image>
    )
};

ProfileMainView.propTypes = {
    activeUser: PropTypes.object
};