import {Text, View, TouchableOpacity} from 'react-native'
import {Feather} from '@expo/vector-icons';
import styles from './style.js';

export default function Cabecalho(){

    return(


        <View style={styles.viewHeader}>

            <Text style={styles.textHeader}> DEMONDEX </Text>

        </View>

    );
}