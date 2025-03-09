import { Stack, useLocalSearchParams } from "expo-router"
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native"
import { Button } from "../../components/button"
import { getProductById } from "../../services/product";
import { router } from 'expo-router';
import { number2Currency } from "../../handlers/number2Currency";

export default function Screen(){
    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if(!product) return router.back();
    const handleBuyProduct = () =>{
        alert("tenha calma moreno, não temos um backend para processar essa compra, ainda.");
    }

    return(
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{title:''}} />
            <ScrollView style={styles.area}>
                <Image
                    source={{uri: product.image }}
                    resizeMode="cover"
                    style={styles.productImage}
                />
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.description}>{product.description}</Text>
                <View style={styles.priceArea}>
                    <Text
                        style={styles.price}
                        >{number2Currency(product.price, "pt-br", "BRL")}</Text>
                </View>
            </ScrollView>
            <View style={styles.btnArea}>
                <Button text="Buy now" onClick={handleBuyProduct}/>
            </View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container:{
        flex:1
    },
    area:{
        flex:1,
        padding: 10,
    },
    btnArea:{
        padding: 10
    },
    productImage:{
        width: "100%",
        height: 250,
        borderRadius: 10,
        marginBottom: 10
    },
    title:{
        fontSize: 29,
        fontWeight: "bold",
        marginBottom: 10
    },
    description:{
        fontSize: 15,
        color: "#555555",
        marginBottom: 10
    },
    priceArea:{
        padding: 10,
        backgroundColor: "#cccccc",
        marginBottom: 10,
        borderRadius: 10,
    },
    price:{
        fontSize: 22,
        fontWeight: "bold",
        textAlign: 'center'
    }
})