//import * as React from 'react';
import React, {useState} from 'react';
import CheckBox from 'react-native-check-box';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  StatusBar,
} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import apiData from '../../api/handerApi';
import stylesLogin from './stylesLogin';

export default function Login() {
  
  const [userName, setuserName] = useState('ctythuytien');
  const [passWord, setpassWord] = useState('123456');
  const [checkbox, setCheckbox] = useState(false);

  const navigation = useNavigation();

  const login = () => {
    apiData.login(userName, passWord).then(login => {
      if (login === "error") {
        alert("Password is not correct");
      } else {
        
        apiData.setLogin("user", userName).then(() => {});
        apiData.setLogin("pass", passWord).then(() => {});
        navigation.push('Tabs');
      }
    });

    
  };

  return (
    <View style={stylesLogin.container}>
      <StatusBar animated={true} backgroundColor="#F8F8F8" />
      <View>
        <Text style={stylesLogin.paragraph}>
          iBox<Text style={{color: 'red'}}>Nav </Text>
        </Text>
        <Image style={stylesLogin.frame} source={require('../img/Frame.png')} />
      </View>

      <View style={stylesLogin.form}>
        <Text style={stylesLogin.text}>Đăng nhập để tiếp tục</Text>
        <View style={stylesLogin.userName_Password}>
          <Text style={stylesLogin.userName}>Tên đăng nhập</Text>
          <TextInput
            style={stylesLogin.textInput}
            autoCapitalize="none"
            placeholder="Nhập tên đăng nhập"
            onChangeText={value => setuserName(value)}
          />
        </View>

        <View style={stylesLogin.userName_Password}>
          <Text style={stylesLogin.userName}>Mật khẩu</Text>
          <View style={stylesLogin.passWord}>
            <TextInput
              secureTextEntry={true}
              password={true}
              placeholder="Nhập mật khẩu"
              onChange={value => setpassWord(value)}
              style={stylesLogin.textInput}
            />
            
          </View>
        </View>

        <View style={stylesLogin.button}>
          <Button
            onPress={() => login()}
            title="Đăng nhập"
            height={58}
          />
        </View>

        <Image style={stylesLogin.logo} source={require('../img/logo.png')} />
      </View>
      <StatusBar backgroundColor="transparent" translucent={true} barStyle={'dark-content'} style='auto'/>

    </View>
  );
}

