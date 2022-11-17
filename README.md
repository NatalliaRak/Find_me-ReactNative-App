# FIND_ME React Native app (in Belarusian name is "ДЗЕ_Я") 

15.November 2022

This project uses GPS-location information for quick showing of the user's coordinates, sharing the accurate coordinates (longitude and latitude) and getting the accurate adress information (including building number. That project can be an app prototype for sharing the location in situations of danger as the project helps to share very accurate location information without using navigator what helps to reduce steps in sharing cordinates. The end-user's language is the Belarusian one.

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
The universal way to run the project is to run the app with help of Expo Go. [Follow the official documantation and run it](https://docs.expo.dev/workflow/expo-go/).

- Download the Expo Go from Google Play or/and Apple Store, install it.
- Install Expo Cli on your computer. (Follow the documentation)[https://docs.expo.dev/get-started/installation/]
- Dowload the template and start the development server with (Expo Cli)[https://docs.expo.dev/get-started/create-a-new-app/]
- To open the app:
   IOS:
     - On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal
   Android:
     - On your Android device, press "Scan QR Code" on the "Home" tab of the Expo Go app and scan the QR code you see in the terminal.


Use it happily!




