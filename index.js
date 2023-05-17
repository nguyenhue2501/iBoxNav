/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import ChiTietXe from './src/component/screens/chitietxe/ChiTietXe';
import Login from './src/component/screens/Login';
import Tabs from './src/component/screens/Tab';
import {name as appName} from './app.json';
import Router from './src/component/router';
AppRegistry.registerComponent(appName, () => Router);
