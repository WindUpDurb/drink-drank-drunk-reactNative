"use strict";

import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import devTools from 'remote-redux-devtools';
import thunk from "redux-thunk";

export default function configureStore(initialState) {
     return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(thunk),
        )
    );
}

