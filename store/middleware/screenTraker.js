import { NavigationActions } from 'react-navigation';
var { NativeModules } = require('react-native');

const log =  NativeModules.UMAnalyticsModule;


function getRouteName(navigationState) {
    if (!navigationState) {
      return null;
    }
    const route = navigationState.routes[navigationState.index];
    if (route.routes) {
      return getRouteName(route);
    }
    return route.routeName;
  }

  
const screenTracking = ({ getState }) => next => (action) => {

  if (action.type === 'Navigation/COMPLETE_TRANSITION') {
    return next(action);
  }

  const currentScreen = getRouteName(getState().nav);
  const result = next(action);
  const nextScreen = getRouteName(getState().nav);
  if (nextScreen !== currentScreen) {
    // 象征性的用友盟对接一下
    log&&log.onEventWithLabel("route",nextScreen);
  }
  return result;
};

export default screenTracking;