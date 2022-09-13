/**
 * @format
 */
 import React from 'react';
 import {AppRegistry} from 'react-native';
 import App from './App';
 import Routes from './src/pages/routes';
 import {name as appName} from './app.json';
 import { Provider as PaperProvider } from 'react-native-paper';
 
 export default function Main() {
     return (
       <PaperProvider>
         <Routes />
       </PaperProvider>
     );
 }
 
 AppRegistry.registerComponent(appName, () => Main);