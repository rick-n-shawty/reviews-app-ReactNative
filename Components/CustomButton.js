import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
export default function CustomButton({pressHandler, title}){
    return(
        <TouchableOpacity onPress={pressHandler}>
            <View style={styles.button} >
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: "#f01d71"
    },
    buttonText: {
        fontWeight: "bold",
        color: "white",
        textTransform: "uppercase",
        fontSize: 16, 
        textAlign: "center"
    }
})