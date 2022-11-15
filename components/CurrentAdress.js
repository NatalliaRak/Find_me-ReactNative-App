import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Button, Alert } from 'react-native';
import * as Location from 'expo-location';


export default function CurrentAdress() {
 async  function  GetLocation () {
    let { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Permission not granted",
        "Allow the app to use location service.",
        [{ text: "ОК" }],
        { cancelable: false }
      );
    }

    let { coords } = await Location.getCurrentPositionAsync();

    if (coords) {
      const { latitude, longitude } = coords;
      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      for (let item of response) { 
             
        Alert.alert(
          "Інфармацыя пра месцазнаходжанне",
          `Вуліца і дом/назва: ${item.name},
          Вуліца: ${item.street}, Паштовы код: ${item.postalCode},
          Горад: ${item.city},  Субрэгіён: ${item.subregion}, 
          Рэгіён: ${item.region}, Краіна: ${item.country} `,
          [
            {
              text: "Дзякуй!",
              onPress: () => console.log("Cупер"),
              style: "default"
            }
          ]
        );

      }
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.texth}>Даведацца свой адрас</Text>
      <Text style={styles.texth}>(гэта можа заняць крыху часу)</Text>
      <View style={styles.butt}>
        <Button
          title="Цісніце"
          onPress={GetLocation}
          color="white"
          style={styles.texth}
         />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    color: "white"
  },
  texth:{
    color: 'white',
    fontSize: 20,
    textAlign: "center",

  },
  butt: {
    backgroundColor: 'crimson',
    borderRadius: 12,
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 7},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    margin: '15%',
    padding: '1%'

   }
})
