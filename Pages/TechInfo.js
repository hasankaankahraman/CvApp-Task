import { StyleSheet, Text, View ,ScrollView ,Dimensions,Image,TouchableOpacity,Linking,} from "react-native";
import * as Progress from 'react-native-progress';

const { height, width } = Dimensions.get('window');

function TechInfo({route}){
    
    const {user} = route.params;

    return(
        <ScrollView style={styles.container}>

            <View style={styles.top}>
                <Image
                style={styles.image}
                source={require('./ctc.png')}/>
            </View>

            <View style={styles.photo}>
                <Image
                    source={{uri:'https://img.freepik.com/free-icon/user_318-159711.jpg'}}
                    style={{ width: 90, height: 90 }}
                />
            </View>
                <Text style={styles.label}>{user.userName} {user.userLast}</Text>
            <View style={styles.labelbottom}>
                <Text style={{color:'#fff'}}>{user.useruni}</Text>
                <Text style={{color:'#fff'}}>{user.userdeparment}</Text>
            </View>

            <View style={styles.iconcard}>
                <View style={styles.iconcardinside}>
                      <Image
                        source={require('./calendar.png')}
                        style={{ width: 30, height: 30 }}
                      />
                      <Text style={styles.icontext}>{user.userBirth}</Text>
                </View>
                <View style={styles.iconcardinside}>
                      <Image
                        source={require('./telephone.png')}
                        style={{ width: 30, height: 30 }}
                      />
                      <Text style={styles.icontext} onPress={() => Linking.openURL(`tel:${user.userNumber}`)}>{user.userNumber}</Text>
                </View>
            </View>

            <View style={styles.iconcard}>
                <View style={styles.iconcardinside}>
                      <Image
                        source={require('./house.png')}
                        style={{ width: 30, height: 30 }}
                      />
                      <Text style={styles.icontext}>{user.userlivein}</Text>
                </View>
                <View style={styles.iconcardinside}>
                
                      <Image
                        source={require('./gmail.png')}
                        style={{ width: 30, height: 30 }}
                      />
                      <Text style={styles.icontext} onPress={() => Linking.openURL(`mailto:${user.userMail}`)}>{user.userMail}</Text>                    
                </View>
            </View>

                <Text style={{textAlign:'center',fontWeight:'bold',color:'#02b5ff'}}>________________________________________________</Text>

            <View style={{margin:20}}>
                <Text style={{textAlign:'center'}}>{user.usersum}</Text>
            </View>

            <View style={styles.sum}>
                <Text style={{textAlign:'center',paddingTop:20,fontSize:20,color:'#fff',fontWeight:'bold'}}>Kariyer</Text>
                <Text style={{textAlign:'center',color:'#02b5ff',fontWeight:'bold',paddingBottom:20}}>_________________________________________________</Text>
                <Text style={styles.sumintext}>Teknolojiler: {user.userusetech}</Text>
                <Text style={styles.sumintext}>Projeler: {user.userproject}</Text>
            </View>

            <View style={styles.sum}>
                <Text style={{textAlign:'center',paddingTop:20,fontSize:20,color:'#fff',fontWeight:'bold'}}>Sosyal Medya</Text>
                <Text style={{textAlign:'center',color:'#02b5ff',fontWeight:'bold'}}>_________________________________________________</Text>
                    <View style={{flexDirection:'row',margin:20}}>
                    <TouchableOpacity onPress={() => Linking.openURL(user.usergit)}>
                      <Image
                        source={require('./gitlogo.png')}
                        style={{ width: 40, height: 40 ,marginLeft:50}}
                      />
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(user.userlinkedn)}>
                      <Image
                        source={require('./linkednlogo.png')}
                        style={{ width: 40, height: 40 ,marginHorizontal:50}}
                      />
                    </TouchableOpacity>
                <TouchableOpacity onPress={() => Linking.openURL(user.userinstagram)}>
                      <Image
                        source={require('./instagramlogo.png')}
                        style={{ width: 40, height: 40,marginRight:50 }}
                      />
                    </TouchableOpacity>
            </View>

            

                
                {/* <Text style={styles.sumintext}>GİT: {user.usergit}</Text>
                <Text style={styles.sumintext}>Linkedn: {user.userlinkedn}</Text>
                <Text style={styles.sumintext}>İnstagram: {user.userinstagram}</Text> */}
            </View>

            <View style={styles.sum} >
                <Text style={{textAlign:'center',paddingTop:20,fontSize:20,color:'#fff',fontWeight:'bold'}}>Dil Seviyeleri</Text>
                <Text style={{textAlign:'center',color:'#02b5ff',fontWeight:'bold',paddingBottom:20}}>_________________________________________________</Text>

                <Text style={{marginLeft:30,fontWeight:'bold',color:'#fff'}}>İngilizce Dil Seviyesi</Text>
                <Progress.Bar style={{marginLeft:30,marginVertical:10}} color="#fff" progress={parseFloat(user.usereng)} width={300} />

                <Text style={{marginLeft:30,fontWeight:'bold',color:'#fff'}}>Algoritma Yazma Seviyesi</Text>
                <Progress.Bar style={{marginLeft:30,marginVertical:10}} color="#fff" progress={parseFloat(user.useralgo)} width={300} />
            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#010010'
    },
    label:{
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center',
        color:'#fff',
        margin:5,
    },
    labelbottom:{
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:20,        
    },
    top:{
        backgroundColor:'#071627',
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        height:height/10,
        alignItems:'center',
        justifyContent:'center'
    },
    image: {
        width: '150%',
        height: '150%',
        resizeMode: 'contain',
    },
    photo:{
        borderRadius:50,
        backgroundColor:'#fff',
        height:100,
        width:100,
        resizeMode: 'contain',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:150,
        marginTop:10
    },
    iconcard:{
        flexDirection:'row',

    },
    iconcardinside:{
        flexDirection:'row',
        paddingLeft:20,
        height:40,
        width:170,
        alignItems:'center'
    },
    icontext:{
        color:'#fff',
        paddingLeft:10
    },
    sum:{
        margin:20,
        backgroundColor:'#010010',
        borderRadius:10,
        borderColor:"#02b5ff",
        borderWidth:1
    },
    sumintext:{
        color:'#fff',
        textAlign:"left",
        paddingLeft:30,
        marginBottom:10
    }

})
export default TechInfo;