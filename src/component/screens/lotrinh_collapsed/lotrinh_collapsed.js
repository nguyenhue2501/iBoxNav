import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import apiData from '../../../api/handerApi';
// import BottomSheet from '@gorhom/bottom-sheet';

export default function loTrinh_Collapsed() {
  const navigation = useNavigation();
  const route = useRoute().params;
  const [data, setData] = useState([]);
  useEffect(() => {
    apiData.getLogin('user').then(user => {
      apiData.getLogin('pass').then(pass => {
        apiData.Lotrinh_Collapsed(user, pass, route.vehicleId, route.timestamp).then(list => {
            if (Array.isArray(list)) {
              setData(list);
            }
          });
      });
    });
  }, []);
  const iconView = (item, index) => {
   
    if (index === 0) {
      return require('../../img/map.png');

    }else if (index === item.length - 1) {

      return '';
    }else{
      return require('../../img/map2.png');
    }
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 10.958686,
          longitude: 106.92464999999999,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {data.map((item, index) => (
        <Marker
          coordinate={{
            latitude: item.lat,
            longitude: item.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          icon = {iconView(data, index)}
          width={0.5}
          height={0.5}
        />
        ))}
        
      </MapView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },

  container2: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
