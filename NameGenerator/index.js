import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
console.disableYellowBox = true;
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);


AppRegistry.registerComponent('NameGenerator', () => App);
