
import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import SearchBar from './node_modules/components/search'; // Import the SearchBar component
import BoxContainer from './node_modules/components/box'; // Import the BoxContainer component
import style from './node_modules/components/style'; // Import the styles


export default function App() {
  return (
    <View style={style.container}>
      <SearchBar />

      <Text style={[style.largeText, { fontWeight: 'bold', textAlign: 'left', width: '100%', paddingLeft: 10 }]}>
Let's find your doctor
      </Text>

        <BoxContainer />

      <StatusBar style="auto" />
    </View>
  );
}
