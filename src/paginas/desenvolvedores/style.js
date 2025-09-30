import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#090909',
      width: '100%',
      height: '100%',
    },
  
    containerView:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },
  
    textBanner: {
      fontSize: 30,
      color: "white",
      marginTop: 25,
      marginBottom: 20,
      fontWeight: 'bold'
    },

    viewDesenvolvedores:{
      padding:'5px',
      marginTop:'20px'
    },

    images:{
      width:'300px',
      height:'400px',
      borderRadius: 10,
      margin:'20px',
      marginBottom:'-15px'
    },

    textTarsis:{
      fontSize: 27,
      color: "white",
      marginTop: 25,
      marginBottom: 20,
      fontWeight: 'bold',
      padding:'10px'
    },

    textSilas:{
      fontSize: 27,
      color: "white",
      marginTop: 25,
      marginBottom: 20,
      fontWeight: 'bold',
      padding:'10px'
    }
});

export default styles;