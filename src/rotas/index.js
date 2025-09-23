import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../paginas/home";
import Detalhes from "../paginas/detalhes";
import DetalhesPesquisa from "../paginas/detalhesPesquisa";
import Desenvolvedores from "../paginas/desenvolvedores";
import PesquisaFilmes from "../paginas/pesquisa";

export default function Rotas(){
    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
            <stack.Navigator screenOptions = {{ headerShown:false,
                headerStyle: {
                backgroundColor: '#141a28',
                },
                headerTintColor: 'white',
                headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 25,
                },
            }}>

                <stack.Screen name="Home" component={Home}/>
                <stack.Screen name="Detalhes" component={Detalhes} options={{headerShown:true}}/>
                <stack.Screen name="Desenvolvedores" component={Desenvolvedores} options={{headerShown:true}}/>
                <stack.Screen name="Pesquisa" component={PesquisaFilmes} options={{headerShown:true}}/>        
                <stack.Screen name="DetalhesPesquisa" component={DetalhesPesquisa} options={{headerShown:true}}/>   

            </stack.Navigator>
        </NavigationContainer>
    )
}