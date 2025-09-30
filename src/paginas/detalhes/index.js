import { ScrollView, View, Text, Image } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function Detalhes(){
    const route = useRoute();
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerView}>

                <View style={styles.containerFilme}>
                    <Image style={styles.images} source={route.params.imagem}/>

                    <Text style={styles.titulo}>{route.params.nome}</Text>
                    <Text style={styles.titulo}>Idade: {route.params.idade}</Text>
                    <Text style={styles.textDesc}> Descrição: {route.params.descricao}</Text>
                    <Text style={styles.textNota}>Gênero: {route.params.genero}</Text>
                    <Text style={styles.textSinopse}> Frase de Efeito: {route.params.frase} </Text>
                </View>

            </View>
        </ScrollView>
    )
}