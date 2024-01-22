import React from "react";
import { View, Text, StyleSheet } from "react-native";
export default function AboutScreen(){
    return(
        <View style={styles.container}>
            <Text style={styles.headerText}>About us: </Text>
            <Text style={styles.mainText}>
            Welcome to our premier computer games store, where the thrill of virtual worlds meets the convenience of your fingertips. At our store, we're not just selling games; we're curating experiences that redefine entertainment. Whether you're a seasoned gamer or just embarking on your digital adventures, we've got something for everyone.
            Dive into a vast collection of the latest and greatest titles spanning various genres, from action-packed shooters to immersive role-playing epics. Our shelves are stocked with cutting-edge releases and timeless classics, ensuring that every gamer finds their perfect match. Discover a world of creativity, strategy, and adrenaline-pumping excitement right here.
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        gap: 10,
    },
    headerText: {
        fontSize: 22,
        fontWeight: "700"
    },
    mainText: {
        fontSize: 18,
        lineHeight: 25
    }
})