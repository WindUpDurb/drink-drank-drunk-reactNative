"use strict";

import React from "react";
import {GoogleSignin} from "react-native-google-signin";



export function triggerSignIn() {
    return function (dispatch) {
        return GoogleSignin.hasPlayServices({ autoResolve: true })
            .then(response => {
                GoogleSignin.configure()
                    .then(() => {
                        GoogleSignin.signIn()
                            .then((user) => {
                                console.log(user);
                                //this.setState({user: user});
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