import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({nome, idade, frase, descricao, raca, genero, imagem}){

    const navigation = useNavigation();

    return(

        <TouchableOpacity style={styles.viewFilmes} onPress={()=> navigation.navigate('Detalhes', {nome, idade, frase, descricao, raca, genero, imagem})}>
            <Image style={styles.images} source={{ uri: imagem }}/>
            <View style={styles.viewText}>
                <Text style={styles.titulo}> {nome} </Text>
            </View>
        </TouchableOpacity>

    )
}