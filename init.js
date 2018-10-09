import {AppRegistry, YellowBox} from 'react-native';
import App from './app';
import {name as appName} from 'MCConfig/app.json';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated','Remote debugger is in a background tab which may cause apps to perform slowly', 'Module RCTImageLoader requires main queue setup since it overrides'])
AppRegistry.registerComponent(appName, () => App)

