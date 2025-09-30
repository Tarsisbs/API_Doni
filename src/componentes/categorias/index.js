import { Text, TouchableOpacity, View, FlatList } from 'react-native';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import styles from './style.js';
import categorias from '../categorias.js';
import CardMovies from '../cardsFilmes/index.js';


const Categoria = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Personagens');

    const lidarCategoriaSelecionada = (categoria) => {
        setCategoriaSelecionada(categoria);
    }

    const [personagem,setPersonagem] = useState([]);

    const [estilo,setEstilo] = useState([]);


    useEffect(()=>{
        async function buscarPersonagem(){
            const url = 'https://www.demonslayer-api.com/api/v1/characters?limit=45';

            const response = await fetch(url)
            const data = await response.json();
            console.log(data.content);

            setPersonagem(data.content);
        }

        buscarPersonagem();
    },[])

    return (
        <View style={{ width: '90%' }}>

            <FlatList

                showsHorizontalScrollIndicator={false}

                horizontal = {true}

                data = {categorias}

                keyExtractor={(item) => item.id}
                renderItem={({item}) => (

                    <TouchableOpacity style={[styles.Categoria, categoriaSelecionada === item.nome && {
                        backgroundColor: '#090909',
                    }]} onPress={() => lidarCategoriaSelecionada(item.nome)}>
                        <Text style={[styles.nomeCategoria, categoriaSelecionada === item.nome && {
                            color: 'white'
                        }]}>{item.nome}</Text>
                    </TouchableOpacity>
                        
                )}

            />

            {categoriaSelecionada === 'Personagens' && (

                <View style={{width:"100%"}}>
                    
                    <Text style={styles.titulo}>Personagens</Text>

                    <FlatList

                      showsVerticalScrollIndicator={false}

                      horizontal = {false}

                      data = {personagem}

                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => (

                        <CardMovies nome = {item.name} idade = {item.age} frase = {item.quote} descricao = {item.description} raca = {item.race} genero = {item.gender} imagem = {item.img}/>
                      
                      )}

                    />

                </View>
            )}

        </View>
    )
}

export default Categoria;