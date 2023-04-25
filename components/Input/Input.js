import React from "react";
import { View,Text,TextInput } from "react-native";

import styles from './Input.style';

function Input({label,onChangeText,yazialani}){
    return(
        <View style={styles.container}>
            <Text style={styles.label} >{label}</Text>
            <View style={styles.input_container}>
                <TextInput onChangeText={onChangeText} style={{ color: 'white' }} placeholder={yazialani} placeholderTextColor="#fff"/>
            </View>
        </View>
    )
}

export default Input;