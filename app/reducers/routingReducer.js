"use strict";

import {ActionConst} from "react-native-router-flux";
import {scene} from "./initialState";

export default function routingReducer (state = scene, action) {
    switch(action.type) {
        case ActionConst.FOCUS:
            return {
                ...state,
                scene: action.scene
            };
        
        default:
            return state;
    }
}
