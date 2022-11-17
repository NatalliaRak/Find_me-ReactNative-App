# FIND_ME React Native app (in Belarusian name is "ДЗЕ_Я") 

15.November 2022

This project uses GPS-location information for quick showing of the user's coordinates, sharing the accurate coordinates (longitude and latitude) and getting the accurate adress information (including building number. That project can be an app prototype for sharing the location in situations of danger as the project helps to share very accurate location information without using navigator what helps to reduce steps in sharing cordinates. The end-user's language is the Belarusian one.


![photo_2022-11-17_15-26-59](https://user-images.githubusercontent.com/106593583/202513495-896e4f75-56cc-4fc0-a576-c0501f18e2d3.jpg | width=100)
![photo_2022-11-17_16-32-37](https://user-images.githubusercontent.com/106593583/202514162-152ebf15-fc87-4781-8ba3-1ae19400d91f.jpg)
![photo_2022-11-17_16-32-40](https://user-images.githubusercontent.com/106593583/202514179-29ef368c-f7bd-4f6e-8803-d48556b41c87.jpg)


## Prerequisites:

- [Node.js](https://nodejs.org/en/)
- [Expo](https://expo.dev/)
- [Socket.io](https://www.npmjs.com/package/react-native-tcp-socket)
- [Metro](https://www.npmjs.com/package/metro-config)
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
- Create new project with Expo:
     npx create-expo-app my-app
 - Install Sockiet.io:
     npm i react-native-tcp-socket.io
 - Install Metro-config:
      npm i metro-config
 - Install Expo-location:
     npx expo install expo-location
 - Install Cocoapods:
     npm i pod-install   
 - Install React Native Permissions:
     npm i react-native-permissions
 - Use template files (App.js, CurrentAdress.js, Current_coordinates.js, Texting.js; pattern.png is used as *ImageBackground*)
- How to open the app on phones:
   IOS:
     - On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal
   Android:
     - On your Android device, press "Scan QR Code" on the "Home" tab of the Expo Go app and scan the QR code you see in the terminal.
- There will be ask of permission to use Geolocation
- Let app to get where are you
- Use it happily!




