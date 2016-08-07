"use strict";

import React from "react";
import {GoogleSignin} from "react-native-google-signin";
import * as types from "./actionTypes";
import * as requestStatusActions from "./requestStatusActions";

export function activeUserConfirmed(activeUser) {
    return {
        type: types.UPDATE_ACTIVE_USER,
        activeUser: activeUser
    };
}

export function authenticateOnDDDServer(user) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("dddandroidauth", "ItsMeHereISwear");
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify({idToken: user.idToken})
        };
        return fetch("http://www.drinkdrankdrunk.tech/api/users/authenticateMobileUser", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                let activeUser = Object.assign({}, user);
                activeUser.userBeerData = parsedResponse;
                return activeUser;

            })
            .catch(error => {
                dispatch(requestStatusActions.receivedRequestError());
                console.log("Authentication failed: ", error);
            })

}

export function triggerSignIn() {
    return function (dispatch) {
        dispatch(requestStatusActions.requestSent());
        return GoogleSignin.hasPlayServices({ autoResolve: true })
            .then(response => {
                GoogleSignin.configure({
                    webClientId: "258716656555-33qtcogqqkmmc87cqenm2qs2do86t1cb.apps.googleusercontent.com"
                })
                    .then(() => {
                        GoogleSignin.signIn()
                            .then((user) => {
                                authenticateOnDDDServer(user)
                                    .then(authedUser => {
                                        dispatch(requestStatusActions.receivedRequestSuccess());
                                        console.log("Final: ", authedUser);
                                        dispatch(activeUserConfirmed(authedUser));
                                    })
                                    .catch(error => {
                                        console.log("Error: ", error);
                                        dispatch(requestStatusActions.receivedRequestError());
                                    })
                            })
                            .catch((err) => {
                                console.log('The sign-in attempt failed.', err);
                                dispatch(requestStatusActions.receivedRequestError());
                            });
                    });
            })
            .catch(error => {
                console.log("Play services error", error);
                dispatch(requestStatusActions.receivedRequestError());
            })

    }
}