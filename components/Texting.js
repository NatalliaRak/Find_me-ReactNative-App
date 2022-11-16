import React from "react";
import { View, Text, StyleSheet } from 'react-native';

export default function Texting(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>
                ДЗЕ_Я
            </Text>
            <Text style={styles.texth}>
                Прыкладанне для хуткай адпраўкі сваіх дакладных каардынат і атрмыння інфармацыі пра свой адрас
            </Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    text:{
      color: 'white',
      fontSize: 30,
      padding: '5%',
      textAlign: 'center'
    },
    texth: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center'
    }
  });
  
