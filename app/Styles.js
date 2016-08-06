"use strict";

import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover"
    },

    launchText: {
        fontSize: 23,
        color: "whitesmoke"
    },

    backgroundImageContainer: {
        flex: 1,
        width: undefined,
        height: undefined,
        shadowRadius: 2,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
    },
    
    launchButton: {
        padding: 10,
        overflow: "hidden",
        borderRadius: 4,
        marginTop: 10,
        backgroundColor: "#3F51B5"
    },

    loadingIndicator: {
        height: 75,
        position: "absolute",
        top: 100,
        left: 150
    },

    center: {
        alignItems: "center",
        justifyContent: "center",
        padding: 8
    }


});