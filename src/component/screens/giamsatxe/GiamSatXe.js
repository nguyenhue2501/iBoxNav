import React, {useEffect, useState} from 'react';
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
  Platform,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/native';
import apiData from '../../../api/handerApi';
import {SelectList} from 'react-native-dropdown-select-list';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
export default function GiamSatXe() {
  const [data, setData] = useState([]);

  useEffect(() => {
    apiData.getLogin('user').then(user => {
      apiData.getLogin('pass').then(pass => {
        apiData.range(user, pass).then(list => {
          if (Array.isArray(list)) {
            setData(list);
          }
        });
      });
    });
  }, []);

  const [date, setDate] = useState(new Date(Date.now()));
  const [mode, setModel] = useState('date');
  const [show, setShow] = useState(false);
  const [textFisrt, setTextFisrt] = useState('');
  const [text, setText] = useState('');

  const onChangeFisrt = (event, selectedDate) => {
    const currenDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currenDate);
    let tempDate = new Date(currenDate);
    let ftime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setTextFisrt(ftime);
  };

  const onChange = (event, selectedDate) => {
    const currenDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currenDate);
    let tempDate = new Date(currenDate);
    let ftime = tempDate.getHours() + ':' + tempDate.getMinutes();
    setText(ftime);
  };

  const showModel = currentModel => {
    setShow(true);
    setModel(currentModel);
  };

  const navigation = useNavigation();
  const tiepTuc = (item) => {
    navigation.navigate('Collapsed', {vehicleId_1: item.vehicleId}, {timestamp_1: item.timestamp});
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Image
            style={styles.danhsachxe}
            source={require('../../img/giamsatxe.png')}
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.text}>Chọn biển số xe bạn muốn theo dõi</Text>
          <View>
            <View style={styles.selected}>
              <SelectDropdown
                data={data}
                rowStyle={styles.selected}
                defaultValueByIndex={'Chọn biển số xe'}
                onSelect={(selectedItem, index) => {
                  selectedItem;
                }}
                defaultButtonText="Chọn biển số xe"
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem.vehicleId;
                }}
                rowTextForSelection={(item, index) => {
                  return item.vehicleId;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
              />

            </View>

            {/* date */}

            <View>
              <View style={styles.inputdate}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Thời gian bắt đầu"
                  value={textFisrt}
                  onFocus={() => showModel('time')}
                />
                <Icon name="eye-off" color="grey" size={20} />
              </View>
              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  negativeButton={{label: 'Cancel', textColor: 'red'}}
                  onChange={onChangeFisrt}
                />
              )}

              <View style={styles.inputdate}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Thời gian kết thúc"
                  value={text}
                  onFocus={() => showModel('time')}
                />
              </View>

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  negativeButton={{label: 'Cancel', textColor: 'red'}}
                  onChange={onChange}
                />
              )}
            </View>
            <View style={styles.button}>
              <Button onPress={() => tiepTuc(data)} title="Tiếp tục" height={58} />
            </View>
          </View>
        </View>
      </ScrollView>
      <StatusBar
        backgroundColor="transparent"
        translucent={true}
        barStyle={'dark-content'}
        style="auto"
      />
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    // width: 375,
    // height: 812,
  },

  danhsachxe: {
    height: 317,
    width: '100%',
  },

  form: {
    paddingLeft: 22.5,
    paddingRight: 25.5,
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    width: 355,
    fontSize: 32,
  },
  inputdate: {
    flexDirection: 'row',
  },
  selected: {
    borderColor: '#EBEBEB',
    borderRadius: 10,
    borderWidth: 1,
    width: '95%',
    //textAlign: 'left',
  },
  dropdown1BtnStyle: {
    width: '100%',
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    textAlign: 'left',
  },
  textInput: {
    borderColor: '#EBEBEB',
    borderRadius: 10,
    borderWidth: 2,
    width: '95%',
    height: 55,
    padding: 15,
    marginTop: 10,
    fontSize: 14,
    textAlign: 'left',
  },
  button: {
    height: 58,
    width: '95%',
    color: '#000',
    marginTop: 30.5,
  },
});
