import * as React from 'react';
import { View,Text,StyleSheet,Dimensions,Image,TouchableOpacity,Linking} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../components/Button/Button';
const { height, width } = Dimensions.get('window');


function Login({navigation}){
    return(
        <View style={styles.container}>

            <View style={styles.top}>
            <LinearGradient colors={['#071627','#071627', '#f3f3f2']} style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Image style={styles.image} source={require('./ctc.png')} />
          </LinearGradient>
            </View>

            <View style={styles.center}>
                <Text style={styles.text}>Hoşgeldin</Text>
                <Text>Geleceğini yazmak için buradayız.</Text>
                <Button text="Şirket Profili Oluştur" onPress={() => navigation.navigate('SignUp')}/>
                <Text style={{marginTop:20}}>Sosyal Medya Hesaplarımızı Ziyaret Et.</Text>

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
            <View style={styles.altyazi}>
                <Text>© 2023 sehirteknolojileri.com </Text>
            </View>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    top:{
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        height:height/2,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        width: '90%',
        height: '90%',
        resizeMode: 'contain',
    },
    center:{
        position: 'absolute',
        top: '50%',
        height: '40%',
        width: '70%',
        alignItems: 'center',
        zIndex: 1,
        borderRadius:10,
        marginLeft:65,
    },
    text:{
        fontWeight:'bold',
        fontSize:20,
        marginTop:20,
        color:'black'
    },
    social:{
        marginTop:10,
        flexDirection:'row',
        justifyContent:'space-between',
        height:50,
        width:160,
    },
    altyazi:{
        marginTop:300,
        justifyContent:'center',
        alignItems:'center'
    },
})