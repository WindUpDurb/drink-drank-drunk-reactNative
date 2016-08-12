"use strict";

import React, {PropTypes} from "react";
import {View, Text, Button, Image, Dimensions} from "react-native";
import {styles} from "../../Styles";
import {ProfileCard} from "../common/ProfileCard";
import {BeerCard} from "../common/BeerCard";


export const ProfileMainView = ({openBeerLog, showBeerLog, userBeerData, activeUser}) => {
    let beerLog;
    if (showBeerLog) beerLog = <BeerCard beerData={userBeerData[0]}/>;
    const width = Dimensions.get("window").width;
    return (
        <Image
            style={[styles.backgroundImageContainer, {width: width * .85}]}
            source={require("../../Images/profileScene.jpg")}>
        <ProfileCard
            openBeerLog={openBeerLog}
            activeUser={activeUser}/>
            {beerLog}
        </Image>
    )
};

ProfileMainView.propTypes = {
    activeUser: PropTypes.object,
    openBeerLog:PropTypes.func,
    userBeerData:PropTypes.array,
    showBeerLog: PropTypes.bool
};