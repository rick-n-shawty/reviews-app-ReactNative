import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
export default function ReviewScreen({ navigation, route }){
    const data = route.params; 
    const rating = data.rating; 
    const [hearts, setHearts] = useState(null);
    useEffect(() => {
        const arr = []
        for(let i = 0; i < rating; i++){
            arr[i] = <AntDesign key={i} name="heart" size={24} color={'red'}/>
        }
        setHearts(arr);
    }, [])
    return(
        <View style={styles.container}>
            <View style={styles.cardContainer}>
                <View style={styles.textContainer}>
                    <Text style={styles.titleText}>{data.title}</Text>
                    <Text style={styles.detailsText}>{data.details}</Text>
                </View>
                <View style={styles.ratingContainer}>
                    <Text style={styles.ratingText}>GameZone Rating: </Text>
                    {hearts}
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        // backgroundColor: "red",
    },
    cardContainer: {
        padding: 10,
        width: "100%",
        minHeight: "15%",
        justifyContent: "center",
        // backgroundColor: "blue",
        gap: 5,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: 'transparent',
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
        borderRightColor: 'rgba(0, 0, 0, 0.4)',
        borderTopColor: 'rgba(0, 0, 0, 0.2)', // Lighter shade on the top
        borderLeftColor: 'rgba(0, 0, 0, 0.2)', // D
    },
    textContainer: {
        width: "100%",
        maxHeight: "70%",
        },
    ratingContainer: {
        width: "100%",
        maxHeight: "30%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    },
    detailsText: {
        fontSize: 16    
    },
    ratingText: {
        fontSize: 17,
        fontWeight: "600"
    }
})