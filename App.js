import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import Taskbar from './components/Taskbar';
import CarInfo from './components/CarInfo';
import RightScreen from './components/RightScreen';


export default function App() {
  return (
    <View style={styles.container}>
      <CarInfo />
      <RightScreen />
      <Taskbar />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
  }
});
