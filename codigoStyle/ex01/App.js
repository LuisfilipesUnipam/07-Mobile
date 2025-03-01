import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Componente from './components/Componente';
import Styles from './styles/styles';

export default function App() {
  
  return (
    <View style={ Styles.container }>
      <Componente nome="Luigi"/>
      <Text style={Styles.textStyle}>
        Olá, seja bem-vindo!!!!!!!!
      </Text>
    </View>
  );
}
