import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box = (props) => {
    return(
        <View style={styles.box}>
            <Text style={styles.text}>{props.nome}</Text>  
        </View>
    );
    
}

export default Box;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: "center",
      backgroundColor: '#e3f2f2'
    },
    box: {
      width: 100,
      height: 100,
      backgroundColor: '#1e88e5'
    },
    text: {
      color: '#fff',
      fontSize: 18
    }
  });