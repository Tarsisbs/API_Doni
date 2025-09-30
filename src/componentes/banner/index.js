import {Text, Image} from "react-native";
import styles from './style.js'

// Array de imagens
const imagens = [
    require('../../../assets/1.jpg'),
];

// Escolhe uma imagem aleatória
const imagem = imagens[Math.floor(Math.random() * imagens.length)];

export default function Banner(){

    return(
        <>
            <Image style={styles.imageBanner} source={imagem}/>
        </>
    );
    
}