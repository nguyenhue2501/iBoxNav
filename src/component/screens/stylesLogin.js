import { StyleSheet } from "react-native";
const stylesLogin = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
    },
  
    paragraph: {
      fontSize: 30.89,
      fontWeight: '800',
      marginLeft: 34,
      paddingTop: 68,
    },
  
    frame: {
      height: 229.44,
      width: 375,
    },
  
    logo: {
      justifyContent: 'center',
      alignItems: 'center',
      width: 169.87,
      height: 40,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  
    form: {
      height: '100%',
      padding: 30,
      borderRadius: 16,
      backgroundColor: '#fff',
    },
    text: {
      textAlign: 'center',
      fontWeight: '700',
      fontSize: 28,
    },
  
    userName_Password: {
      marginTop: 24,
    },
  
    userName: {
      color: '#919EAB',
      fontSize: 12,
    },
  
    passWord: {
      flexDirection: 'row',
    },
  
    textInput: {
      borderBottomColor: '#0F91E7',
      borderBottomWidth: 2,
      width: '95%',
      height: 40,
      fontSize: 14,
    },
  
    button: {
      height: 58,
      width: '95%',
      color: '#000',
      marginTop: 30.5,
    },
  
    checkboxContainer: {
      flexDirection: 'row',
      marginTop: 28,
    },
    label: {
      marginLeft: 8,
      color: '#2D3142',
      fontSize: 14,
    },
  });
export default stylesLogin;