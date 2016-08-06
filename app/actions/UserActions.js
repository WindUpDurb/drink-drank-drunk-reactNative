"use strict";

import React from "react";
import {GoogleSignin} from "react-native-google-signin";

export function authenticateOnDDDServer(idToken) {

        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("dddandroidauth", "ItsMeHereISwear");
        let options = {
            method: "POST",
            credentials: "same-origin",
            headers: headers,
            mode: "cors",
            cache: "default",
            body: JSON.stringify({idToken})
        };
        return fetch("http://www.drinkdrankdrunk.tech/api/users/authenticateMobileUser", options)
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                console.log("Parsed response: ", parsedResponse);
            })
            .catch(error => {
                console.log("Error1: ", error);
            })

}

export function triggerSignIn() {
    return function (dispatch) {
        return GoogleSignin.hasPlayServices({ autoResolve: true })
            .then(response => {
                GoogleSignin.configure({
                    webClientId: "258716656555-33qtcogqqkmmc87cqenm2qs2do86t1cb.apps.googleusercontent.com"
                })
                    .then(() => {
                        GoogleSignin.signIn()
                            .then((user) => {
                                console.log(user);
                                //this.setState({user: user});
                                authenticateOnDDDServer(user.idToken);
                            })
                            .catch((err) => {
                                console.log('WRONG SIGNIN', err);
                            });
                    });
            })
            .catch(error => {
                console.log("Play services error", error);
            })

    }
}