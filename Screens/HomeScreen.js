import React, {useState} from "react";
import { View, Text, StyleSheet, Button, FlatList, Modal, 
    TouchableWithoutFeedback, 
    Keyboard } from "react-native";
import ReviewCard from "../Components/ReviewCard";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./ReviewForm";
export default function HomeScreen({navigation}){
    const [reviews, setReviews] = useState([
        {
            id: 1,
            title: "Breath of fresh air",
            details: "Blablaknknan nknakndknakjdnkadn kndakndkjandkja dnkajndknakndkjan ",
            rating: 5
        },
    ])
    const [modalOpen, setModalOpen] = useState(false); 
    const addReview = (review) => {
        review.id = Date.now().toString() + "_" +  (Math.random() * 255); 
        setReviews(prev => {
            const temp = [review, ...prev]; 
            return temp; 
        }) 
        setModalOpen(false);
    }
    return(
        <View style={styles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name="close" size={24} style={[styles.modalToggle, styles.modalClose]} onPress={() => setModalOpen(false)}/>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons name="add" size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)}/>
            <FlatList
            style={styles.list}
            data={reviews}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => {
                return (
                <ReviewCard navigation={navigation} title={item.title} data={item}/>
                )
            }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        alignItems: "center",
    },
    list: {
        width: "100%",
        // backgroundColor: "black"
    },
    modalToggle: {
        marginBottom: 1,
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 23,
        padding: 10,
        alignSelf: "center"
    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },
    modalContent: {
        flex: 1
    }
})