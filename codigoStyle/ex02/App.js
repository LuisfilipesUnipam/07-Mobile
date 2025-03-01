import React from "react";
import { Text, View, StyleSheet } from 'react-native';

import Box from "./components/box";

export default function App() {
  return (
    <View style={styles.container}>
      <Box nome="Caixa 1"/>
      <Box nome="Caixa 2"/>
      <Box nome="Caixa 3"/>
    </View> 
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#e3f2f2'
  },
});