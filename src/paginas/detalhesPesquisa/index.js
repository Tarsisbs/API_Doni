import { ScrollView, View, Text, Image } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function DetalhesPesquisa(){
    const route = useRoute();
    const { personagens } = route.params;
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerView}>

                <View style={styles.containerFilme}>
                    <Image style={styles.images} source={{uri:(`${personagens.img}`)}}/>

                    <Text style={styles.titulo}>{personagens.name}</Text>
                    <Text style={styles.titulo}>{personagens.age}</Text>
                    <Text style={styles.titulo}> Descrição: {personagens.description}</Text>
                    <Text style={styles.textNota}>Gênero: {personagens.gender}</Text>
                </View>
                
            </View>
        </ScrollView>
    )
}