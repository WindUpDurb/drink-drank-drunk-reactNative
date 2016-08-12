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

    backgroundWallpaper: {
        
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
        padding: 8,
        overflow: "hidden",
        marginTop: 10,
        backgroundColor: "#00897B",
        elevation: 3
    },

    buttonTextWhite: {
      color: "white"

    },
    homeOuterView: {
        flex: 1,
        flexDirection: "row"
    },
    profileOuterView: {
        flex: 1,
        flexDirection: "row"
    },

    profileCard: {
        backgroundColor: "white",
        alignItems: "center",
        elevation: 3
    },

    beerCardView: {
        marginTop: 15,
        backgroundColor: "white",
        alignItems: "center",
        elevation: 3
    },

    circleImage: {
        marginTop: 10,
        height: 100,
        borderRadius: 50,
        width: 100
    },

    //look into better way of setting image size responsively
    beerCardImage: {
        width: 200,
        height: 200,
        resizeMode: "cover"
    },

    ToProfileSideTab: {
        flex: .5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#78909C"
    },

    toBeersSideTab: {
        flex: .5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#607D8B"
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