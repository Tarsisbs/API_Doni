import { View, ScrollView, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { use } from "react";
import { useEffect, useState } from "react";
import { useNavigation } from '@react-navigation/native';
import styles from "./style";

export default function PesquisaFilmes(){
    const[personagens, setPersonagens] = useState('');

    useEffect(()=>{
        async function buscarPersonagens(){
            const url = `https://www.demonslayer-api.com/api/v1/characters?name=${route.params.pesquisa}`;

            const response = await fetch(url)
            const data = await response.json()
            console.log(data.content)
            setPersonagens(data.content)
        }

        buscarPersonagens()
    },[])

    const route = useRoute();

    const navigation = useNavigation();

    return(
        <ScrollView style={styles.container}>
            <FlatList
                data={personagens}
                keyExtractor={(item)=>item.id}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.containerFilmes} onPress={()=> navigation.navigate('DetalhesPesquisa', {personagens: item})}>
                        <Image style ={styles.image} source={{uri:(`${item.img}`)}}/>
                        <View style={styles.info}>
                            <Text style={styles.titulo}>Nome: {item.name}</Text>
                            <Text style={styles.tituloNota}>Raça: <View style={styles.numeroNota}>{item.race}</View></Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </ScrollView>
    );
}