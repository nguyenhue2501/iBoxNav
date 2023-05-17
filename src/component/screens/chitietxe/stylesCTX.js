
import { StyleSheet } from "react-native";
const stylesCTX = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      flex: 1,
      color: "#2D3142",
  
    },
  
    heads: {
      flexDirection: "row",
      paddingLeft: '6.67%',
      paddingTop: 52,
    },

    headText: {
      marginRight: 20,
    },
  
    back: {    
      position: 'absolute',
      width: 150,
      height: 150,
      backgroundColor: "#FFFFFF",
      borderRadius: 16,
        
    },
  
    title: {
      fontWeight: "900",
      fontSize: 24,
      lineHeight: 33,
      color: "#2D3142",
      paddingLeft: 65,
    },
  
    information: {
      paddingLeft: '6.67%',
    },
  
    information_number: {
      marginTop: '5%',
      fontWeight: "900",
      fontSize: 24,
      lineHeight: 33,
      
    },
  
    information_car: {
    },
  
    information_carRigth: {
      marginLeft: '50%',
      marginTop: -80,
      width: 187,
      height: 187,
      borderRadius: 187,
      backgroundColor: '#ecf2f7',
    },
  
    car: {
      width: 120,
      height: 120,
      marginLeft: '20%',
      marginTop: '20%'
    },
    information_status: {
      flexDirection: "row",
    },
  
    information_status_text: {
      fontSize: 16, 
      fontWeight: '400', 
      lineHeight: 22, 
      textAlign: 'left'
    },
  
    details: {
      backgroundColor: "#FFFFFF",
      borderRadius: 24,
      flex: 1,
      padding: 24,
      marginTop: -53,
    },
  
    details_information: {
  
    },
  
    details_information_title: {
      fontWeight: "700",
      fontSize: 16,
      paddingBottom: 8,
    },
  
    details_information_title1: {
      fontWeight: "700",
      fontSize: 16,
      paddingBottom: 8,
      paddingTop: 24,
    },
  
    details_information_row: {
      paddingTop:8,
      flexDirection: "row",
    },
  
    details_information_row_left: {
      width: 200,
    },
  
    details_information_row_lable: {
      fontWeight: '700',
      fontSize: 10,
      lineHeight: 12,
      color: '#919EAB',
  
    },
  
    details_information_row_number: {
      fontWeight: '400',
      fontSize: 14,
      lineHeight: 19,
  
    }, 
  
    button: {
      color: '#000',
      marginTop: 24,
      textAlign: 'center',
      fontSize: 15,
    },
  
  });

export default stylesCTX;
  