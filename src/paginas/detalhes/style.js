import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#090909',
        width: '100%',
        height: '100%'
    },
    
    containerView:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        padding: '20px'
    },

    containerFilme:{
        backgroundColor:'#1e1e1e',
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },

    viewFilmes:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#141a45',
        padding:'15px',
        borderRadius: 10,
        marginBottom: '10px',
        marginRight: '20px',
        width:'150px'
    },

    titulo:{
        color: '#fff',
        fontSize:25,
        paddingTop:8,
        textTransform:'uppercase'
    },
    textDesc:{
        color: '#fff',
        fontSize:20,
        paddingTop:10
    },
    textNota:{
        fontSize:25,
        color: '#FFCC33',
        paddingLeft: 4,
        paddingTop: 10
    },
    textSinopse:{
        fontSize:20,
        color:'#fff',
        fontWeight:200,
        textAlign:'center',
        marginTop:20
    },
    images:{
        width:'260px',
        height:'380px',
        borderRadius: 8
    }
});

export default styles;