"use strict";

import React, {PropTypes} from "react";
import {View, Text, Dimensions, Image} from "react-native";
import {ToBeersSideTab} from "./ToBeersSideTab";
import {ToProfileSideTab} from "./ToProfileSideTab";
import {styles} from "../../Styles";


export const SideNav = ({changeScene}) => {
    return (
        <View>
            <ToBeersSideTab 
                changeScene={changeScene}/>
            <ToProfileSideTab
                changeScene={changeScene}/>
        </View>
    );
};

SideNav.propTypes = {
    changeScene: PropTypes.func
};