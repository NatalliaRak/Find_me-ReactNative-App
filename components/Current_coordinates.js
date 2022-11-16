import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Share, Button } from 'react-native';
import * as Location from 'expo-location';

export default function CurrentCoordinates() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Няма дасяжнасці да геалакацыі');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      
    })();
  }, []);

  let  long = 'вызначаем...';
  if (errorMsg) {
    long = errorMsg;
  } else if (location) {
    long = location.coords.longitude.toFixed(3);
  }

  let  lat = 'вызначаем...';
  if (errorMsg) {
    lat = errorMsg;
  } else if (location) {
    lat = location.coords.latitude.toFixed(3);
  }

    const onShare = async () => {
      try {
        const result = await Share.share({
          message:
            `Мае дакладныя каардынаты:
            ${location.coords.latitude}
            ${location.coords.longitude}, 
             забейце іх у навігатар`, 
        });
      } catch (error) {
        alert(error.message);
      }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.texth}>Даўжыня: {long}</Text>
      <Text style={styles.texth}>Шырыня: {lat}</Text>
      <View style={styles.butt}>
          <Button
            title='Даслаць свае каардынаты'
            onPress={onShare}
            color="white"
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      color: "white"
    },
    texth:{
      color: 'white',
      fontSize: 20,
    },
    butt: {
      backgroundColor: 'crimson',
      borderRadius: 12,
      shadowColor: '#171717',
      shadowOffset: {width: -2, height: 5},
      shadowOpacity: 0.2,
      shadowRadius: 3,
      margin: '10%',
      padding: '1%'
     }
  })
