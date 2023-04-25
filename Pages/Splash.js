import React from "react";
import { ImageBackground,View, Text,Image ,StyleSheet} from "react-native";


function SplashScreenImage ({navigation}){
    setTimeout(() => {navigation.replace('Login')},5000);
    return(
        <View style={styles.container}>
            <View style={styles.logo}>
            <Image style={styles.image} source={require('./ctc.png')} />
            <Text style={{color:'#fff',fontWeight:'bold'}}>Dikkat Yazılım Taşşak Gerektirir!</Text>
            </View>
        </View>
    )
}

export default SplashScreenImage;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#010010'
    },
    logo:{
        justifyContent:'center',
        alignItems:'center',
    },
    image: {
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
    },

})