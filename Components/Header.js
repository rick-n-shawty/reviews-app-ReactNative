import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function Header({navigation}){
    const handlePress = () => {
        navigation.openDrawer();
    }
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.iconWrap}>
                <MaterialIcons name="menu" size={25} onPress={handlePress}/>
            </View>
            <View style={styles.textWrap}>
                <Text style={styles.headerText}>GameZone</Text>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 70,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#ddd",
        flexDirection: "row",
        padding: 4,
    },
    iconWrap: {
        justifyContent: "center",
        alignItems: "center",
        width: "15%",
        height: "100%"
    },
    textWrap: {
        justifyContent: "center",
        alignItems: "center",
        width: "75%",
        height: "100%"
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 0,
    },
    menuIcon: {

    }
})