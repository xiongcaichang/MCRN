/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { View,Text, NativeModules } from 'react-native';
import { Provider, connect } from "react-redux";
import mconnect from './mconnect'
import store, {persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { reduxifyNavigator } from 'react-navigation-redux-helpers';
import AppNavigator from 'MCConfig/Navigator'
import EStyleSheet from 'react-native-extended-stylesheet';
import Loading from 'rnx-ui/Loading';
import CSS_CONFIG from './css';
import initialStorage from './storage';
import { isIOS } from './device'
import env from './env'
import envConfig from 'MCConfig/Env'
const NAVBAR_HEIGHT = isIOS ? 44 : 56;

EStyleSheet.build(CSS_CONFIG);   
initialStorage();

@mconnect({visible: 'Loading.visible'})
class PublicCom extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        {this.props.children}
        <Loading
          visible={this.props.visible}
          size="large"
          color="#FFF"
          overlayStyle={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
          loaderStyle={{
            marginTop: -NAVBAR_HEIGHT,
          }}/>
        {__DEV__ && <Text style={{position:'absolute',right: 15,width :30, fontSize: 10, color:'white',textAlign:'center',borderRadius:3, height: 15,bottom:15,backgroundColor:'pink', borderRadius: 5}} onPress={() => {
          persistor.purge();
        }} 
        >clear</Text>}
     </View>
    )
  }
}

const AppCom = reduxifyNavigator(AppNavigator, "root");
const mapStateToProps = (state) => ({state: state.nav});
const AppWithNavigationState = connect(mapStateToProps)(AppCom);

export default class App extends Component {
  constructor(props){
    super(props);
    NativeModules.ConfigModule &&  NativeModules.ConfigModule.setEnvOptions && NativeModules.ConfigModule.setEnvOptions(Object.keys(envConfig));
    Object.assign(env,envConfig[props.envKey || 'prod']);
    global.version = props.version;
    global.build = props.build;
  }

  render() {
    return (
      <Provider store={store}>
        <PublicCom>
         <PersistGate loading={null} persistor={persistor}>
         <AppWithNavigationState />
         </PersistGate>
         </PublicCom>
      </Provider>
    );
  }
}
