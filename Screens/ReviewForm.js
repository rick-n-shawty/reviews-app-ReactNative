import React from "react";
import { 
    View, 
    Text, StyleSheet, TextInput, Button } from "react-native"; 
import { Formik } from "formik"; 
import * as yup from "yup"; 
import CustomButton from "../Components/CustomButton";
const ReviewSchema = yup.object({
    title: yup.string().required().min(4).max(10),
    details: yup.string().required().min(4).max(55),
    rating: yup.string().required().test('is-num', "Rating must be a number 1-5", (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0; 
    })
})

export default function ReviewForm({addReview}){

    return(
        <View style={styles.container}>
            <Formik 
            initialValues={{title: "", details: "", rating: ""}}
            validationSchema={ReviewSchema}
            onSubmit={(value, actions) => {
                addReview(value);
                actions.resetForm(); 
            }}
            >
                {(props) => {
                   return(<View style={styles.form}>
                        <TextInput 
                        placeholder="review title" 
                        value={props.values.title} 
                        style={styles.input}
                        onBlur={props.handleBlur('title')}
                        onChangeText={props.handleChange('title')}/>
                        <Text style={styles.errorText}>{ props.touched.title && props.errors.title }</Text>
                        <TextInput 
                        placeholder="review details" 
                        value={props.values.details} 
                        style={styles.input} 
                        onBlur={props.handleBlur("details")}
                        onChangeText={props.handleChange('details')}/>
                        <Text style={styles.errorText}>{ props.touched.title && props.errors.details }</Text>
                        <TextInput 
                        keyboardType="numeric"
                        placeholder="1-5" 
                        value={props.values.rating}
                        style={styles.input} 
                        onBlur={props.handleBlur('rating')}
                        onChangeText={props.handleChange('rating')}/>
                        <Text style={styles.errorText}>{ props.touched.rating && props.errors.rating }</Text>
                        <CustomButton pressHandler={props.handleSubmit} title={'submit'}/>
                    </View>
                    )
                }}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 2
    },
    container: {
        flex: 1,
        padding: 20,
    },
    form: {
        gap: 5
    },
    errorText: {
        color: "maroon"
    },
    submitBtn: {
    }
})