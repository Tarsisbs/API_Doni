import {StyleSheet} from "react-native";

const styles = StyleSheet.create({

    viewFilmes:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        backgroundColor: '#1e1e1e',
        padding:'15px',
        borderRadius: 10,
        marginBottom: '40px',
        marginRight: '20px',
        width:'325px',
        height:'480px',
    },

    viewText:{
        backgroundColor: 'black',
        color: 'white',
        marginTop: '-20%',
        width: '110%',
        height: '15%'
    },

    titulo:{
        fontWeight: 800,
        color: '#fff',
        fontSize: 25,
        textTransform: 'uppercase',
        paddingTop: 15,
        marginLeft: '10px'
    },

    images:{
        width:'300px',
        height:470,
        borderRadius:8,
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
    }
})

export default styles