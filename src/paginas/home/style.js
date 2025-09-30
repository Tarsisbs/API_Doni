import { StyleSheet } from "react-native";

export const VIDEO_HEIGHT = 180;

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#090909',
      width: '100%',
      height: '100%'
    },
  
    containerView:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center'
    },
  
    textBanner: {
      fontSize: 30,
      color: "white",
      marginTop: 15,
      marginLeft: -150,
      marginBottom:'10px',
      fontWeight: 'bold'
    },

    titulo:{
        color: '#fff',
        fontSize:20,
        padding:'15px',
        borderRadius: 15,
        borderWidth: 1,
        borderColor:'white',
        backgroundColor: '#1C2B47',
        marginBottom:'30px'
    },
    tituloDesenvolvedores:{
        color: '#fff',
        fontSize:20,
        padding:'15px',
        borderRadius: 15,
        borderWidth: 1,
        borderColor:'white',
        backgroundColor: '#090909',
        marginBottom:'30px'
    }
});

export default styles;