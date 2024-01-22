import React from "react";
import {} from "react-native"; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import HomeScreen from "../Screens/HomeScreen";
import ReviewScreen from "../Screens/ReviewScreen";
import Header from "../Components/Header";
const Stack = createNativeStackNavigator(); 

export default function StackNav({navigation}){

    return(
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen options={{header: () => <Header navigation = {navigation}/>}} name="home" component={HomeScreen}/>
                <Stack.Screen options={{headerShown: true}} name="review-details" component={ReviewScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}