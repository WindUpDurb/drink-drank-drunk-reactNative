"use strict";

import React, {PropTypes} from "react";
import {View, Text, Dimensions, Image} from "react-native";
import {styles} from "../../Styles";


export const BeerCard = ({beerData}) => {
    console.log("BeerData: ", beerData)
    let width = Dimensions.get("window").width;
    let height = Dimensions.get("window").height;
    return (
        <View style={[styles.beerCardView, {height: height * .5, width: width * .7}]}>
            <Image
                style={styles.beerCardImage}
                source={{uri: beerData.beerImage}}/>
            <Text>{beerData.beerName}</Text>
            <Text>{beerData.breweryName}</Text>
        </View>
    );
};

BeerCard.propTypes = {
    beerData: PropTypes.object
};