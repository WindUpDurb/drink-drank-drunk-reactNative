/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import configureStore from "./app/store/configureStore";
import App from "./app/components/App";
import {Provider} from "react-redux";
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

const store = configureStore();

class androidDrinkDrankDrunk extends Component {
  render() {
    return (
        <Provider store={store}>
           <App />
        </Provider>
    );
  }
}



export default store;

AppRegistry.registerComponent('androidDrinkDrankDrunk', () => androidDrinkDrankDrunk);
