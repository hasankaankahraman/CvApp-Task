import React from "react";
import {TouchableOpacity,Text} from "react-native";

import styles from "./Button.style";


const Button = ({text,onPress}) => {
    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttontext}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button;