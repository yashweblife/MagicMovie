import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import MovieFinder from './src/components/MovieFinder';
import { colors } from './src/styles/styles';

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <MovieFinder/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
