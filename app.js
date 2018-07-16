/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { Provider, connect } from "react-redux";
import store from './store';
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import AppNavigator from 'MCConfig/Navigator'
import EStyleSheet from 'react-native-extended-stylesheet';
import CSS_CONFIG from './css';
import initialStorage from './storage';

EStyleSheet.build(CSS_CONFIG);   
initialStorage();    

const AppCom = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({state: state.nav});
const AppWithNavigationState = connect(mapStateToProps)(AppCom);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    );
  }
}
