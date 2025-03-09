import { 
    StyleSheet,
    Image,
    Text, 
    View
} from "react-native"
import { Link, router } from "expo-router"

import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

export default function Screen (){

    return(
        <View style={styles.container}>
            <Text style={styles.credits}>Feito com ❤️ por:</Text>
            <Text style={styles.name}>Pedro Lucas</Text>
            <Text style={styles.contact}>
                Meus contatos:
                <FontAwesome5
                    size={28}
                    name="hand-point-down"
                    color={"black"}
                />
            </Text>

            <Link href="https://wa.me/5522992329198" asChild>
                <Text style={styles.whatsapp}>Whatsapp: <FontAwesome
                        size={28}
                        name="whatsapp"
                        color={"black"}
                    /></Text>
            </Link>

            <Link href="https://www.github.com/thorxenon" asChild>
                <Text style={styles.github}>Github: <FontAwesome
                        size={28}
                        name="github"
                        color={"black"}
                    /></Text>
            </Link>

            <Link href="https://www.linkedin.com/in/pedro-lucas-rangel-99084819a" asChild>
                <Text style={styles.github}>Linkedin: <FontAwesome
                        size={28}
                        name="linkedin"
                        color={"black"}
                    /></Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: "center",
        alignItems:"center"
    },
    credits:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    name:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10
    },
    whatsapp:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    contact:{
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10
    },
    github:{
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    }
})