"use strict";

import {AsyncStorage} from "react-native";

export function checkForBeerDirectories() {
    return function (dispatch) {
        AsyncStorage.getItem("beerDirectories")
            .then(directories => {
                console.log("Directories: ", JSON.parse(directories));
            })
            .catch(error => {
                loadBeerDirectory();
            });
    }
}

export function loadBeerDirectory() {
    return function (dispatch) {
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
                console.log("Beer Directories: ", beerDirectories);
                AsyncStorage.setItem("beerDirectories", JSON.stringify(beerDirectories))
                    .catch(error => {
                        console.log("Error async: ", error);
                    })

            })
    }
}