import { 
    StyleSheet,
    SafeAreaView,
    Image,
    Text 
} from "react-native"
import { Button } from "../components/button"
import { router } from "expo-router"

export default function Screen (){

    const handleStart = () =>{
        router.replace("/home")
    }

    return(
        <SafeAreaView style={styles.container}>
            <Image
                source={require("../assets/logo.png")}
                style={styles.logo}
                resizeMode="cover"
            />
            <Text style={styles.h1}>Store</Text>
            <Text style={styles.h2}>Simple app using the power of React Native</Text>

            <Button
                text="Saiba mais"
                onClick={handleStart}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    h1:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    h2:{
        fontSize: 18,
        color: "#666",
        textAlign: "center"
    },
    logo:{
        width:200,
        height:200,
        marginBottom: 20
    }
})