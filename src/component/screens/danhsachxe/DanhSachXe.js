import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  StatusBar, 
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { SearchBar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import apiData from '../../../api/handerApi';
import stylesDSX from './stylesDSX';

const Item = ({item, onPress, textColor, status}) => (
  <TouchableOpacity onPress={onPress} style={stylesDSX.row}>
    <View style={stylesDSX.row_left}>
      <Text style={stylesDSX.row_left_information}>{item.vehicleId.toUpperCase()}</Text>
      <View style={stylesDSX.row_left_status}>
        <Icon name="ellipse-sharp" size={16} color={textColor} style={{paddingRight: 5}} />
        <Text style={stylesDSX.row_left_status_text}>{status}</Text>
      </View>
      <View style={stylesDSX.row_left_status}>
        <Icon name="speedometer" size={16} color="black" style={{paddingRight: 5}}/>
        <Text style={stylesDSX.row_left_status_text}>{item.speed}km/h</Text>
      </View>           
    </View>
    <View style={stylesDSX.row_right}>
      <Image style={stylesDSX.car} source={require('../../img/car.png')} />
    </View>  
  </TouchableOpacity>
);

export default function DanhSachXe() {
  
  const navigation = useNavigation();
  const [selectedSpeed, setSelectedSpeed] = useState();
  const [listVehicle, setListVehicle] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [search, setSearch] = useState('');
  // function call before render Component
  useEffect(() =>{
    //call api get list vehicle

    apiData.getLogin("user").then((user) => {
      apiData.getLogin("pass").then((pass) => {  
          apiData.getListVehicle(user, pass).then((list) => {
            // phan nay em se bat ngoai le cho no
            if(Array.isArray(list)){
                setListVehicle(list);
                setMasterDataSource(list);  
            }
          })      
      })
    })
    // Đây là phần connect giữa api và màn hình code của em, em sẽ xử dụng cái biến
    // listVehicle để sử dụng ở bên dưới phần return FlastList thay cho DATA
    // Em sẽ xử lý thêm phần loading khi api chưa trả về response nhé
    // listVehicle[i].speed, ở trong FlastList thì nó có sẵn Item rồi thì em chỉ cần item.speed thôi nhé
  }, [])

  const renderItem = ({item}) => {
    const textColor = () => {
      if (item.speed == 0) {
        return "#FFC107";
      }else {
        return "#4CAF50";
      }
    }

    const status = () => {
      if (item.speed == 0) {
        return "Đang dừng";
      }else {
        return "Đang hoạt động";
      }
    }

    const onPress = (item) => {
      navigation.navigate('ChiTietXe', {id_1: item.id});
    }

    
    return (
      <Item
        item={item}
        onPress={() => onPress(item)}
        textColor={textColor()}
        status={status()}
      />
    );
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.vehicleId
          ? item.vehicleId.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setListVehicle(newData);
      setSearch(text);
    } else {
      setListVehicle(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <View style={stylesDSX.container}>
      <ScrollView>
        <View>
          <Image style={stylesDSX.danhsachxe} source={require('../../img/danhsachxe.png')} />
        </View>
        <View style={stylesDSX.form}>
          <Text style={stylesDSX.text}>Danh Sách Xe</Text>
          <View style={stylesDSX.searchBar__clicked}>
            <SearchBar
              placeholder="Tìm kiếm xe"
              platform = "default"
              round
              lightTheme
              onChangeText={(text) => searchFilterFunction(text)}
              onClear={(text) => searchFilterFunction('')}
              value={search}
            />
          </View>


          <FlatList
            data={listVehicle}
            renderItem={renderItem}
            keyExtractor={item => item.speed}
            extraData={selectedSpeed}
          />

        </View>
      </ScrollView>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} style='auto'/> 
    </View>

  );
}
