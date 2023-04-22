import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider} from 'react-redux';
import store from './redux/Store';

export default function App() {

  const user  = ''

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Text>This is the start of My Chatting App</Text>
        <StatusBar style="auto" />
      </View>
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
