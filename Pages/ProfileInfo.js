import { StyleSheet, Text, View } from "react-native";


function ProfileInfo({route}){
    const {user} = route.params;

    return(
        <View>
            <Text style={styles.complete}>KAYIT BAŞARILI</Text>
            <Text style={styles.label}>Üye Şehri: {user.userName}</Text>
            <Text style={styles.label}>Üye Adı:{user.userLast}</Text>
            <Text style={styles.label}>Üye Soyadı:{user.userNumber} </Text>
            <Text style={styles.label}>Üye Doğum Tarihi: {user.userBirth}</Text>
            <Text style={styles.label}>Üye Doğum Yeri: {user.userfrom}</Text>
            <Text style={styles.label}>Üye Yaşadığı İli: {user.userlivein}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    label:{
        fontWeight:'bold',
        fontSize:15,
        justifyContent:'center',
        alignItems:'center',
        color:'black',
        margin:5,
    },
    complete:{
        fontWeight:'bold',
        textAlign:'center',
        fontSize:50,
        color:'black',
        margin:10
    }
})
export default ProfileInfo;

