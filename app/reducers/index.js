"use strict";

import { combineReducers } from "redux";
import beerDirectoriesReducer from "./beerDirectoriesReducer";
import routingReducer from "./routingReducer";
import requestStatusReducer from "./requestStatusReducer";
import userAndAuthReducer from "./userAndAuthReducer";


const rootReducer = combineReducers({
    //the property specified here will impact the way it is referred in the rest of the application
    //or short-hand property name of just: `courses`
    beerDirectories: beerDirectoriesReducer,
    routes: routingReducer,
    fetching: requestStatusReducer,
    activeUser: userAndAuthReducer
});

export default rootReducer;
