"use strict";

import React, { Component } from 'react';
import configureStore from "./app/store/configureStore";
import {Scene, Router} from "react-native-router-flux";
import HomeScene from "./app/components/Home/HomeScene";
import LaunchScene from "./app/components/Launch/LaunchScene";
import ProfileScene from "./app/components/Profile/ProfileScene";
import BeerDirectoryScene from "./app/components/BeerDirectory/BeerDirectoryScene";
import App from "./app/components/App";
import {Provider} from "react-redux";
import { AppRegistry, StyleSheet, Text, View} from 'react-native';

const store = configureStore();
class androidDrinkDrankDrunk extends Component {
  render() {
    return (
        <Provider store={store}>
            <Router>
                <Scene key="root">
                    <Scene key="home" component={HomeScene}/>
                    <Scene key="profile" component={ProfileScene}/>
                    <Scene key="beerDirectory" component={BeerDirectoryScene}/>
                    <Scene key="launch" component={LaunchScene} hideNavBar={true} initial={true}/>
                </Scene>
            </Router>
        </Provider>
    );
  }
}



export default store;

AppRegistry.registerComponent('tech.drinkdrankdrunk', () => androidDrinkDrankDrunk);
