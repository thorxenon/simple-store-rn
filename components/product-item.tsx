import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Product } from "../types/product"
import { Link } from "expo-router"

export const ProductItem = ({ id, title, description, price, image }: Product) => {

    const numberAsCurrency = (number: number)=>{
        const format = new Intl.NumberFormat("pt-br",{
            style:"currency",
            currency: "BRL",
        });

        return format.format(number);
    }

    return(
        <Link href={`/product/${id}`} asChild>
            <Pressable style={styles.container}>
                <Image
                    source={{uri: image}}
                    style={styles.productImage}
                />
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{description}</Text>
                    <Text style={styles.price}>{numberAsCurrency(price)}</Text>
                </View>
               
            </Pressable>
        </Link>
    )
}

const styles = StyleSheet.create({
    container:{
        display:"flex",
        flexDirection:"row",
        // backgroundColor: "#ffff",
        marginBottom: 20,
    },
    productImage:{
        width: 100,
        height: 100,
        marginRight:20,
        borderRadius: 10,
        backgroundColor: "#cccccc"
    },
    info:{
        flex:1
    },
    title:{
        fontWeight:"bold",
        fontSize: 16,
        marginBottom: 10
    },
    description:{
        fontSize: 14,
        color: "#555555"
    },
    price:{
        fontSize: 14,
        fontWeight:"bold",
        textAlign:"right"
    }
})
