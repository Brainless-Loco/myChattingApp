import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import store from './redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';


const Stack = createNativeStackNavigator();

export default function App() {

  const user  = ''

  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerTitle:'My Chat',headerTitleAlign:'center',
        headerStyle:{
          backgroundColor:'#0274ed',
        }
        ,
        headerTitleStyle:{
          color:'white',
          fontWeight:'bold'
        }}} />
      </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
