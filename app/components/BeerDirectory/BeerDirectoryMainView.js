"use strict";

import React, {PropTypes} from "react";
import {View, Text, Button, Image, Dimensions} from "react-native";
import {styles} from "../../Styles";
import {ProfileCard} from "../common/ProfileCard";



export const BeerDirectoryMainView = ({beerDirectories}) => {
    let width = Dimensions.get("window").width;
    console.log("Beer dir: ", beerDirectories)
    return (
        <Image
            style={[styles.backgroundWallpaper, {width: width * .85, backgroundColor: "#90a4ae"}]}
            source={{uri: "https://www.transparenttextures.com/patterns/mbossed.png"}}>
        </Image>
    )
};

BeerDirectoryMainView.propTypes = {
    beerDirectories: PropTypes.object
};