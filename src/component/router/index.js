/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import Login from '../screens/Login';
import Tabs from '../screens/Tab';
import ChiTietXe from '../screens/chitietxe/ChiTietXe';
import GiamSatXe from '../screens/giamsatxe/GiamSatXe';
import DanhSachXe from '../screens/danhsachxe/DanhSachXe';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { AccessibilityInfo, View } from 'react-native';
import loTrinh_Collapsed from '../screens/lotrinh_collapsed/lotrinh_collapsed';

const Stack = createNativeStackNavigator();

const Routers = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  // const authContext = React.useMemo(() => ({
  //   Login: () => {
  //     setIsLoading(false);
  //   },
  //   DanhSachXe: () => {
  //     setIsLoading(false);
  //   },
  //   ChiTietXe: () => {
  //     setIsLoading(false);
  //   },
  //   GiamSatXe: () => {
  //     setIsLoading(false);
  //   },
  // }));

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1000)
  // }, [])

  // if (isLoading) {
  //   return (
  //     <View style = {{flex: 1, justifyContent: "center", alignItems: "center"}}>
  //       <AccessibilityInfo size = "large"/>
  //     </View>
  //   )
  // }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        <Stack.Screen name="Tabs" component={Tabs} options={{headerShown: false}} />
        <Stack.Screen name="DanhSachXe" component={DanhSachXe} options={{headerShown: false}} />
        <Stack.Screen name="ChiTietXe" component={ChiTietXe} options={{headerShown: false}} />
        <Stack.Screen name="GiamSatXe" component={GiamSatXe} options={{headerShown: false}} />
        <Stack.Screen name="Collapsed" component={loTrinh_Collapsed} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};
export default Routers;
