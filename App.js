import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import store from './redux/Store';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Chat from './screens/Chat';
import SignUp from './screens/SignUp';
import LogIn from './screens/LogIn';


const Stack = createNativeStackNavigator();

export default function App() {

  const user  = ''

  return (
    <Provider store={store}>
      <NavigationContainer  >
      <Stack.Navigator>
        {/* <Stack.Screen name="login" component={LogIn} options={{headerTitle:'My Chat',headerTitleAlign:'center',
          headerBackVisible:false,
          headerStyle:{
            backgroundColor:'#0274ed',
          },
          headerTitleStyle:{
            color:'white',
            fontWeight:'bold'
          }}}/>
        <Stack.Screen name="signup" component={SignUp} options={{headerTitle:'My Chat',headerTitleAlign:'center',headerBackVisible:false,
        headerStyle:{
          backgroundColor:'#0274ed',
        },
        headerTitleStyle:{
          color:'white',
          fontWeight:'bold'
        }}}/> */}
        <Stack.Screen name="home" component={Home} options={{headerTitle:'My Chat',headerTitleAlign:'center',
        headerBackVisible:false,
        headerStyle:{
          backgroundColor:'#0274ed',
        }
        ,
        headerTitleStyle:{
          color:'white',
          fontWeight:'bold'
        }}} />
        <Stack.Screen name= 'chat' component={Chat} options={{headerTitle:'Conversation',
        headerTitleAlign:'center',headerTitleStyle:{
          color:'#0274ed'
        }}} />
        {/* options={{ headerShown: false }} */}
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
