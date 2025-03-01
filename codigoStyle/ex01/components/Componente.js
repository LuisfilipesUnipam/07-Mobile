import React from "react";
import { Text, View, StyleSheet } from "react-native";

const nome = "Luigi";

const Componente = (props) => {
    return (
        <View >
            <Text>
                Olá {props.nome}, seja bem vindo a disciplina de desenvolvimento mobile. 
            </Text>
        </View>
    );
}

export default Componente;

const styles = StyleSheet.create({
    textStyle: {
      fontSize:24,
      color:'#333'
    }
});
