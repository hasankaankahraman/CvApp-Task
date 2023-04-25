import React, { useState } from "react";
import { Alert, ScrollView,StyleSheet, Text, View,Dimensions,ImageBackground} from "react-native";

import Input from '../components/Input/Input';
import Button from '../components/Button/Button';


function SignUP({navigation}){


    const[userName,setUserName]= useState('');
    const[userLast,setUserLast]= useState('');
    const[userNumber,setUserNumber]= useState('');
    const[userBirth,setUserBirth]= useState('');
    const[usersum,setUserSum]= useState('');
    const[userlivein,setUserLivein]= useState('');

    const[useruni,setUserUni]= useState('');
    const[userdeparment,setUserDepartment]= useState('');
    const[useralgo,setAlgo]= useState('');
    const[userusetech,setUserUsetech]= useState('');
    const[usereng,setEng]= useState('');
    const[userproject,setUserProject]= useState('');
    const[usergit,setUserGit]= useState('');
    const[userlinkedn,setUserLinkedn]= useState('');
    const[userinstagram,setUserInstagram]= useState('');
    const[userMail,setUserMail]= useState('');


    function handleSubmit(){

        if(!userName ||!userLast ||!userNumber ||!userBirth ||!usersum ||!userlivein){
            Alert.alert('CTC','Bilgiler boş bırakılamaz!');
        } else {
            const user = {
                userName,
                userLast,
                userNumber,
                userBirth,
                usersum,
                userlivein,
                useruni,
                userdeparment,
                useralgo,
                userusetech,
                usereng,
                userproject,
                usergit,
                userlinkedn,
                userinstagram,
                userMail,
            }
            const usertech={
                useruni,
                userdeparment,
                userusetech,
                userproject,
                usergit,
                userlinkedn,
                userinstagram,
                userMail,
            }
            // navigation.navigate('Tab',{screen: 'ProfileInfo', params: {user} })
            navigation.navigate('Tab',{ screen: 'TechInfo', params: {user} })
        } 
    }

    return(
        <View style={{ flex: 1 }}>
            <ImageBackground
        source={{ uri: 'https://w0.peakpx.com/wallpaper/747/967/HD-wallpaper-zeroone-rain-rain-code-matrix-hackers-hack-hacker-programming-style.jpg' }}
        style={{ flex: 1, resizeMode: 'cover' }}
      >
        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false}>

            <View style={styles.cardview}>
            <Input 
            label={"Adı"}
            yazialani={"HASAN KAAN..."}
            onChangeText={setUserName}
            />
            <Input 
            label={"Soyadı"} 
            yazialani={"KAHRAMAN..."}
            onChangeText={setUserLast}
            />
            <Input 
            label={"Cep Telefonu"} 
            yazialani={"5546439110..."}
            onChangeText={setUserNumber}
            />
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:30}}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}> İlerlemek İçin Kaydırın</Text>
                <Text style={{fontWeight:'normal',color:'#fff'}} >>>>>>>>>>>>>>>>>>>></Text>
            </View>
            </View>

            <View style={styles.cardview}>
            <Input 
            label={"Doğum Tarihi"} 
            yazialani={"04.05.2000..."}
            onChangeText={setUserBirth}
            />
            <Input 
            label={"Yaşadığı İl"} 
            yazialani={"Konya..."}
            onChangeText={setUserLivein}
            />
            <Input 
            label={"Özet"} 
            yazialani={"... üzerinde çalışıyorum..."}
            onChangeText={setUserSum}
            />
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:30}}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}> İlerlemek İçin Kaydırın</Text>
                <Text style={{fontWeight:'normal',color:'#fff'}} >>>>>>>>>>>>>>>>>>>></Text>
            </View>
            </View>

            <View style={styles.cardview}>
            <Input 
            label={"Üniversite Adı"} 
            yazialani={"Konya Teknik Üniversitesi..."}
            onChangeText={setUserUni}
            />
            <Input 
            label={"Bölümü"} 
            yazialani={"Bilgisayar Mühendisliği..."}
            onChangeText={setUserDepartment}
            />
            <Input 
            label={"Kullanılan Teknolojiler"} 
            yazialani={"Blender,Unity,3DsMax,React-Native..."}
            onChangeText={setUserUsetech}
            />
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:30}}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}> İlerlemek İçin Kaydırın</Text>
                <Text style={{fontWeight:'normal',color:'#fff'}} >>>>>>>>>>>>>>>>>>>></Text>
            </View>
            </View>

            <View style={styles.cardview}>
            <Input 
            label={"Projeler"} 
            yazialani={"CvAPP,VRAPP..."}
            onChangeText={setUserProject}
            />
            <Input 
            label={"İngilizce Seviyesi"} 
            yazialani={"0.3..."}
            onChangeText={setEng}
            />
            <Input
            label={"Algoritma Yazma Becerisi"} 
            yazialani={"0.8..."}
            onChangeText={setAlgo}
            />
            <View style={{justifyContent:'center',alignItems:'center',paddingTop:30}}>
                <Text style={{fontSize:15,fontWeight:'bold',color:'#fff'}}> İlerlemek İçin Kaydırın</Text>
                <Text style={{fontWeight:'normal',color:'#fff'}} >>>>>>>>>>>>>>>>>>>></Text>
            </View>
            </View>

            <View style={styles.cardview}>
            <Input 
            label={"Üye GİT Hesabı"} 
            yazialani={"Git Link..."}
            onChangeText={setUserGit}
            />
            <Input 
            label={"Üye Linkedn Hesabı"} 
            yazialani={"Linkedn Link..."}
            onChangeText={setUserLinkedn}
            />
            <Input 
            label={"Üye İnstagram Hesabı"} 
            yazialani={"İnstagram Link..."}
            onChangeText={setUserInstagram}
            />
            <Input 
            label={"Üye Maili"} 
            yazialani={"Gmail Link..."}
            onChangeText={setUserMail}
            />
            <Button text={"Kaydı Tamamla"} onPress={handleSubmit}/>
            </View>

        </ScrollView>
        </ImageBackground>
        </View>
    )
}

export default SignUP;
const styles = StyleSheet.create({
    cardview:{
        borderRadius:10,
        borderWidth:1,
        borderColor:'#02b5ff',
        backgroundColor:'rgba(0, 0, 0, 0.5)',
        marginLeft:50,
        marginRight:45,
        marginTop:150,
        width:300,
        height:440,
        justifyContent:'center',
        alignItems:'stretch'
        
    },
    personalbanner:{
        backgroundColor:'#02b5ff',
        width: '100%',
        height: '3%',
        alignItems:'center',
        justifyContent:'center',
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
    },
    bannertext:{
        fontSize:20,
        fontWeight:'bold',
        color:'#fff'
    },
    button:{
        paddingBottom:50
    }

  })