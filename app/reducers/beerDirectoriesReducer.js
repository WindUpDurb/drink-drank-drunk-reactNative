"use strict";

import * as types from "../actions/actionTypes";
import * as initialState from "./initialState";


export default function beerDirectoriesReducer(state = initialState.beerDirectories, action) {

    switch(action.type) {
        default:
            return state;
    }

}