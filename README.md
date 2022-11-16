# FIND_ME React Native app (in Belarusian name is "ДЗЕ_Я") 

15.November 2022

This project uses GPS-location information for quick showing of the user's coordinates, sharing the accurate coordinates (longitude and latitude) and getting the accurate adress information (including building number. That project can be an app prototype for sharing the location in situations of danger as the project helps to share very accurate location information without using navegator what helps to reduce steps in sharing cordinates. The end-user's language is the Belarusian one.

## Prerequisites:

- [Node.js](https://nodejs.org/en/)
- [Expo](https://expo.dev/)
- [Socket.io](https://www.npmjs.com/package/react-native-tcp-socket)
- [Metro](https://facebook.github.io/metro/)
- VScode

## Base dependencies:

 - expo for IOS and Android dev enviroment ;
 - expo-location for getting GPS navigation;
 - metro-config for the JS bundling;
 - pod-install for managing dependencies;
 - react native permissions for unifing permissions API for React Native on iOS, Android and Windows;
  <br>
Also there are the keys and values in the Info.plist for getting IOS permissions for using the user's location. There are no Android requets for location, please, follow [the React Native documantation to set them](https://reactnative.dev/docs/0.63/geolocation) and [Android requets location permission](https://developer.android.com/training/location/permissions#accuracy).

## Usage

The universal way to run the project is to run the app with help of Expo Go. [Follow the official documantation to install and run it](https://docs.expo.dev/workflow/expo-go/).


## Folder structure

The project has simple and traditional structure:
 <br>
 - package.json
 - package.lock.json
 - metro.config.js
 - babel.config.js
 - app.json
 - App.js

    -  components:
        - Current_coordinates.js
        - CurrentAdress.js
        - Texting.js

    - assets:
          - adoptive-con.png
          - favicon.ico
          - icon.png
          - pattern.png
          - splash.png


   ### Components Folder

   The Folder includes the  Current_coordinates.js, CurrentAdress.js and Texting.js files. 
   <br>
   The Current_coordinates.js consists the React Native code for getting the usrer's location and it's sharing. The rendering elements are the **Texts** with coordinates and the *Button*.
    <br>
   The CurrentAdress.js consists from the React Native code for gettring user's adress location information, the information for the user provides in *React Native Alert*. The rendering elements are the *Text** and *Button*.
    <br>
   The Texting.js includes *Text* with basic information about the React Native app in Belarusian (all end-user information is in Belarusian Cirylica).

   ### Assets Folder

   The images in the folder are customized.




