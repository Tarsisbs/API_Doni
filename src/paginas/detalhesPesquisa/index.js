import { ScrollView, View, Text, Image } from "react-native-web";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function DetalhesPesquisa(){
    const route = useRoute();
    const { filme } = route.params;
    const navigation = useNavigation();
    return(
        <ScrollView style={styles.container}>
            <View style={styles.containerView}>

                <View style={styles.containerFilme}>
                    <Image style={styles.images} source={{uri: (`https://image.tmdb.org/t/p/original/${filme.poster_path}`)}}/>

                    <Text style={styles.titulo}>{filme.title}</Text>
                    <Text style={styles.titulo}> Lançamento: {filme.release_date}</Text>
                    <Text style={styles.textNota}>Nota: ⭐{filme.vote_average}</Text>
                </View>

                <Text style={styles.textSinopse}> Sinopse: {filme.overview} </Text>
            </View>
        </ScrollView>
    )
}