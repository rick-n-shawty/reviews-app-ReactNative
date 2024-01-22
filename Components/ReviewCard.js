import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
export default function ReviewCard({title, data, navigation}){
    const handlePress = () => {
        navigation.navigate('review-details', data);
    }
    return(
        <TouchableOpacity style={styles.container} onPress={handlePress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        // backgroundColor: "red",
        margin: 10,
        padding: 10,
        borderRadius: 4,
        borderWidth: 1
    },
    text: {
        fontSize: 19
    }
})