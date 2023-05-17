import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-elements';
import GiamSatXe from '../giamsatxe/GiamSatXe';
import stylesCTX from './stylesCTX';
import {useNavigation, useRoute} from '@react-navigation/native';
import apiData from '../../../api/handerApi';

export default function ChiTietXe() {
  const navigation = useNavigation();
  const route = useRoute().params;

  const [listDetails, setListDetails] = useState([]);
  //const [date, setDateTime] = useState('');

  const getCurrentDate=()=>{
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes();
    var sec = new Date().getSeconds(); 
    return date + '-' + month + '-' + year + ' ' + hours + ':' + min + ':' + sec;//format: d-m-y;
}

  useEffect(() =>{
    
    apiData.getLogin("user").then((user) => {
      apiData.getLogin("pass").then((pass) => {
          apiData.detailsCar(user, pass, route.id_1).then((list) => {
            if (Object(list)) {
              setListDetails(list);
            }
          })
      })
    })
  }, [])

  const onPressGoBack = () => {
    navigation.goBack('DanhSachXe');
  };
  
  const onPressLearnMore = () => {
    navigation.navigate('GiamSatXe');
  };

  return (
    <View style={stylesCTX.container}>
    <ScrollView>
    
      <View style = {stylesCTX.heads}> 
        <Button style = {{width:50, height:50, backgroundColor:"#ffffff", }} onPress={() => onPressGoBack()}>
          <Icon name="arrow-back-outline" size={16} color="black"></Icon>
        </Button>
        <View style = {stylesCTX.headText}> 
          <Text style = {stylesCTX.title}>Thông tin xe</Text>
        </View>
      </View>
      <View style={stylesCTX.information}>
        <Text style={stylesCTX.information_number}>{listDetails.deviceId}-{listDetails.vehicleId}</Text>

        <View style={stylesCTX.information_car}>
          <View style={stylesCTX.information_carLeft}>
            <View style={stylesCTX.information_status}>
              <Icon name="date-range" size={16} color="black" style={{paddingRight: 5, paddingTop: 3}} />
              <Text style={stylesCTX.information_status_text}>{getCurrentDate()}</Text>
            </View>
            <View style={stylesCTX.information_status}>
              <Icon name="ellipse-sharp" size={16} color="#FFC107" style={{paddingRight: 5, paddingTop: 3}} />
              <Text style={stylesCTX.information_status_text}>Đang dừng</Text>
            </View>
          </View>
          <View style={stylesCTX.information_carRigth}>
            <Image style={stylesCTX.car} source={require('../../img/car.png')} />
          </View>  
        </View>  
      </View>

      <View style={stylesCTX.details}>
        <View style={stylesCTX.details_information}>
          <Text style={stylesCTX.details_information_title}>Thông tin xe</Text>

          <View style={stylesCTX.details_information_row}>
            <View style={stylesCTX.details_information_row_left}>
              <Text style={stylesCTX.details_information_row_lable}>Vĩ độ</Text>
              <Text style={stylesCTX.details_information_row_number}>{listDetails.lat}</Text>
            </View>

            <View style={stylesCTX.details_information_row_left}>
              <Text style={stylesCTX.details_information_row_lable}>Vận tốc giới hạn</Text>
              <Text style={stylesCTX.details_information_row_number}>{listDetails.speedLimit}</Text>
            </View>
          </View> 

          <View style={stylesCTX.details_information_row}>
            <View style={stylesCTX.details_information_row_left}>
              <Text style={stylesCTX.details_information_row_lable}>Kinh độ</Text>
              <Text style={stylesCTX.details_information_row_number}>{listDetails.lng}</Text>
            </View>

            <View style={stylesCTX.details_information_row_left}>
              <Text style={stylesCTX.details_information_row_lable}>Quãng đường</Text>
              <Text style={stylesCTX.details_information_row_number}>{listDetails.engineKm}</Text>
            </View>
          </View> 

          <View style={stylesCTX.details_information_row}>
            <View style={stylesCTX.details_information_row_left}>
              <Text style={stylesCTX.details_information_row_lable}>Vận tốc</Text>
              <Text style={stylesCTX.details_information_row_number}>{listDetails.speed}</Text>
            </View>

          </View> 
        </View>

        <View style={stylesCTX.details_information}>
          <Text style={stylesCTX.details_information_title1}>Thông tin Lái xe</Text>

          <View style={stylesCTX.details_information_row}>
            <View style={stylesCTX.details_information_row_left}>
              <Text style={stylesCTX.details_information_row_lable}>Lái xe</Text>
              <Text style={stylesCTX.details_information_row_number}>{listDetails.driverName}</Text>
            </View>

            <View style={stylesCTX.details_information_row_left}>
              <Text style={stylesCTX.details_information_row_lable}>Số điện thoại</Text>
              <Text style={stylesCTX.details_information_row_number}>{listDetails.phoneNumber}</Text>
            </View>
          </View> 

          <View style={stylesCTX.details_information_row}>
            <View style={stylesCTX.details_information_row_left}>
              <Text style={stylesCTX.details_information_row_lable}>Giấy phép lái xe</Text>
              <Text style={stylesCTX.details_information_row_number}>{listDetails.driverLicenseNumber}</Text>
            </View>
          </View> 
        </View>

        <View style={stylesCTX.details_information}>
          <Text style={stylesCTX.details_information_title1}>Vị trí hiện tại</Text>
          <View style={stylesCTX.details_information_row}>                          
            <Text style={stylesCTX.details_information_row_number}>{listDetails.address}</Text>        
          </View> 
        </View>

        <View style={stylesCTX.button}>
          <Button 
            onPress={onPressLearnMore}
            title="Giám sát xe"
            height={58}
            color="#0F91E7"
          /> 
        </View>
      </View>
    </ScrollView>
    <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} style='auto'/>
    </View>
  );
}
