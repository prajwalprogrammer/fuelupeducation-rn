/**
 * @format
 */
import 'react-native-gesture-handler'
import { AppRegistry } from 'react-native'
import App from './App'
import { GetStarted } from './src/screens/index'
import { name as appName } from './app.json'
import { enableScreens } from 'react-native-screens'

enableScreens()
AppRegistry.registerComponent(appName, () => GetStarted)
