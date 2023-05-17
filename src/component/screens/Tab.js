import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import DanhSachXe from './danhsachxe/DanhSachXe';
import GiamSat from './giamsatxe/GiamSatXe';
import ThongKe from './thongke/ThongKe';
import TienIch from './tienich/TienIch';
const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Danh sách xe') {
              iconName = focused
                ? 'car'
                : 'car';
            } else if (route.name === 'Giám sát') {
              iconName = focused ? 'location' : 'location';
            }else if (route.name === 'Thống kê') {
              iconName = focused ? 'calendar' : 'calendar';
            }else if (route.name === 'Tiện ích') {
              iconName = focused ? 'checkmark-circle' : 'checkmark-circle';
            }
            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0F91E7',
          tabBarInactiveTintColor: '#919EAB',
        })}
      >
        <Tab.Screen name="Danh sách xe" component={DanhSachXe} options={{headerShown: false}} />
        <Tab.Screen name="Giám sát" component={GiamSat} options={{headerShown: false}} />
        <Tab.Screen name="Thống kê" component={ThongKe} options={{headerShown: false}}/>
        <Tab.Screen name="Tiện ích" component={TienIch} options={{headerShown: false}} />
      </Tab.Navigator>
    
  );
}

