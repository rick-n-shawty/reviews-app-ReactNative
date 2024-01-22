import "react-native-gesture-handler"; 
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from 'react'; 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from "./Screens/HomeScreen";
import AboutScreen from "./Screens/AboutScreen";
import HomeStackNav from "./Navigators/HomeStackNav";
import Header from "./Components/Header"; 

const Drawer = createDrawerNavigator(); 

export default function App() {
  return ( 
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" options={{headerShown: false}}>
          {props => <HomeStackNav {...props}/>}
        </Drawer.Screen>
        <Drawer.Screen options={{header: ({navigation}) => <Header navigation = {navigation}/>}} name="About"component={AboutScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
