"use strict";

import {AsyncStorage} from "react-native";
import * as requestStatusActions from "./requestStatusActions";
import * as types from "./actionTypes";

export function fetchBeerStylesDirectoriesSuccess(beerStyles) {
    return {
        type: types.LOAD_BEER_DIRECTORY_SUCCESS,
        beerStyles: beerStyles
    };
}

export function loadBeerDirectories() {
    return function (dispatch) {
        AsyncStorage.removeItem("beerDirectories");
        dispatch(requestStatusActions.requestSent());
        AsyncStorage.getItem("beerDirectories")
            .then(directories => {
                let parsedDirectories = JSON.parse(directories);
                if (!parsedDirectories) {
                    fetchBeerDirectories()
                        .then(directories => {
                            dispatch(requestStatusActions.receivedRequestSuccess());
                            dispatch(fetchBeerStylesDirectoriesSuccess(directories));

                        })
                        .catch(error => {
                            console.log("Error: ", error);
                        })
                } else {
                    dispatch(requestStatusActions.receivedRequestSuccess());
                    dispatch(fetchBeerStylesDirectoriesSuccess(parsedDirectories));
                }
            })
            .catch(error => {
                console.log("Error: ", error);
            });
    }
}


export function fetchBeerDirectories() {
        return fetch("http://api.brewerydb.com/v2/menu/styles/?key=852f05c67350a731492d69cf272223e2")
            .then(response => {
                return response.json();
            })
            .then(parsedResponse => {
                let beerDirectories = {};
                for (let i = 0; i < parsedResponse.data.length; i++) {
                    if (parsedResponse.data[i].categoryId < 9) {
                        if (!beerDirectories.hasOwnProperty(parsedResponse.data[i].categoryId)) {
                            beerDirectories[parsedResponse.data[i].categoryId] = {};
                            beerDirectories[parsedResponse.data[i].categoryId].styleNames = [{name: parsedResponse.data[i].name, styleId: parsedResponse.data[i].id}];
                            beerDirectories[parsedResponse.data[i].categoryId].categoryName = parsedResponse.data[i].category.name;
                        } else {
                            beerDirectories[parsedResponse.data[i].categoryId].styleNames.push({name: parsedResponse.data[i].name, styleId: parsedResponse.data[i].id});
                        }
                    }
                }
                return AsyncStorage.setItem("beerDirectories", JSON.stringify(beerDirectories))
                    .then(() => {
                        return beerDirectories;
                    })
                    .catch(error => {
                        console.log("Error async: ", error);
                    })

            })
}