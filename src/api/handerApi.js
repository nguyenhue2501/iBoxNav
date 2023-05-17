import AsyncStorage from '@react-native-async-storage/async-storage';
import { Text } from 'react-native-elements';

var base64 = require('base-64');
let api = 'http://iboxnav.com.vn:8000/api';
let login = `${api}/v1.0/user/auth`;
const apiGetListVehicle = `${api}/v2.0/vehicle`; // danh sach xe, chi tiet xe
const apiRange = `${api}/v1.0/eventdata/nextRow?vehicleId=60F-008.05&timestamp=1683274750`; // giam sat xe
const Collapsed = `${api}/v1.0/eventdata/range?vehicleId=60F-008.05&startTime=29/11/2022 10:00:00&endTime=29/11/2022 12:00:00`;


let apiData = {
  // api Login
  async login(user, pass){
    try{
        let res = await fetch(`${login}`,{
            method: 'GET',
            headers: new Headers({
                'Authorization' : 'Basic '+ base64.encode(user+ ":" +pass),
            })
        })
        let resJson = await res.json();
        return resJson;

    }catch (error) {
        return 'error'
    }
  },

  // api danh sach xe
  async getListVehicle(user, pass){
      try {
        let res = await fetch(`${apiGetListVehicle}`,{
          headers: new Headers({
              'Authorization' : 'Basic '+ base64.encode(user+ ":" +pass ),
          })
      })
      let resJson = await res.json();
      return resJson;

      } catch (error) {
        return 'error'
      }
  },

  // api chi tiet xe
  async detailsCar(user, pass, id){
    try {
      let res = await fetch(`${apiGetListVehicle}${id}`,{
        headers: new Headers({
            'Authorization' : 'Basic '+ base64.encode(user+ ":" +pass ),
        })
    })
    let resJson = await res.json();
    return resJson;

    } catch (error) {
      return 'error'
    }
  },

  // giam sat xe
  async range(user, pass){
    try {
      let res = await fetch(`${apiGetListVehicle}`,{
        headers: new Headers({
            'Authorization' : 'Basic '+ base64.encode(user+ ":" +pass ),
        })
    })
    let resJson = await res.json();
    return resJson;

    } catch (error) {
      return 'error'
    }
  },

  //Lo trinh
  async Lotrinh_Collapsed(user, pass, vehicleId, timestamp){
    try {
      let res = await fetch(`${Collapsed}?vehicleId=${vehicleId}&timestamp=${timestamp}`,{
        headers: new Headers({
            'Authorization' : 'Basic '+ base64.encode(user+ ":" +pass ),
        })
    })
    let resJson = await res.json();
    return resJson;

    } catch (error) {
      return 'error'
    }
  },

  async setLogin(key, value){
    try{
        await AsyncStorage.setItem(key, value);
        // await AsyncStorage.setItem("username", user);
        // let value = AsyncStorage.getItem("username");
        // return value; 
    }catch (e) {
        return 'error'
    }
  },

  async getLogin(key){
    try{
        let value = await AsyncStorage.getItem(key);
        return value;
    }catch (e) {
        return 'error'
    }
  },

}
export default apiData;