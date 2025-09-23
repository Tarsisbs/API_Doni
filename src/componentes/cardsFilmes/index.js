import React from 'react'
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style.js';
import { useNavigation } from '@react-navigation/native';

export default function CardMovies({nome, raca, genero, imagem}){

    const navigation = useNavigation();

    return(

        <TouchableOpacity style={styles.viewFilmes} onPress={()=> navigation.navigate('Detalhes', {nome, raca, genero, imagem})}>
            <Image style={styles.images} source={{ uri: imagem }} />
            <Text style={styles.titulo}> {nome} </Text>

            <Text style={styles.textNota}> {raca} </Text>
        </TouchableOpacity>

    )
}