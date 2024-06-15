/**
 * @format
 */

import 'react-native-gesture-handler'; // Make sure this is the first import
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import App from './App';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const AppRoot = () => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <App />
  </GestureHandlerRootView>
);

AppRegistry.registerComponent(appName, () => AppRoot);
