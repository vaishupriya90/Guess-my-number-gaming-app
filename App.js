import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from 'react-native';
import StartGameScreen from './screens/StartGameSceen';

export default function App() {
  return (
    <LinearGradient colors={['#ddb52f','#c2407f']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: '#ddb52f',
  },
});
