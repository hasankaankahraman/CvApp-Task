import React from "react";
import { View,Text,StyleSheet,Image,TouchableOpacity,Linking} from "react-native";

export function DrawerContent(route){
    // const {user} = route.params; Bunu kullanamıyorum Tek bir sayfaya params yollayabildim.

    return(
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('./ctc.png')}/>
                <View>
                <Image
                    source={{uri:'https://img.freepik.com/free-icon/user_318-159711.jpg'}}
                    style={{ width: 90, height: 90,marginLeft:90 }}
                />
                <Text style={{color:'#fff',paddingTop:10,textAlign:'center'}}>ŞEHİR TEKNOLOJİLERİ MERKEZİ HOŞGELDİNİZ</Text>
                    <View>
                        <Text style={{color:'#fff',margin:20,paddingTop:10,textAlign:'center'}} >
                            Şehir Teknolojileri Merkezi, yazılım sektöründe ihtiyaç duyulan
                            insan kaynağı ve yazılım teknolojilerini üretmektedir.
                        </Text>
                    </View>
                </View>
                <View style={styles.social} >  
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/sehirteknolojilerimerkezi')}>
                      <Image
                        source={require('./linkednlogo.png')}
                        style={{ width: 40, height: 40 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/sehirteknolojilerimerkezi')}>
                      <Image
                        source={require('./instagramlogo.png')}
                        style={{ width: 40, height: 40 }}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://www.konya.bel.tr/')}>
                      <Image
                        source={require('./konyalogo.png')}
                        style={{ width: 40, height: 40 }}
                      />
                    </TouchableOpacity>
                    </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#071627',
    },
    image:{
        width:150,
        height:150
    },
    social:{
        marginLeft:60,
        marginTop:200,
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        width:160,
    },
})