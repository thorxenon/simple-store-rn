import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { Category } from "../types/category"
import { router } from 'expo-router';

export const CategoryItem = ({ id, title, cover }: Category) =>{

    const handleClick = () =>{
        router.push(`/categories/${id}`);
    }

    return(
        <Pressable
            style={styles.container}
            onPress={handleClick}
        >
            <Image
                style={styles.categoryImage}
                source={{uri: cover}}
                resizeMode="cover"
            />
            <View style={ styles.bg }></View> 

            <View style={styles.box}>
                <Text style={styles.title}>{title}</Text>
            </View>  
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical :10,
        backgroundColor: "#333333",
        borderRadius:10
    },
    categoryImage:{
        width: "100%",
        height: 150,
        borderRadius: 10
    },
    bg:{
        height: 150,
        marginTop: -150,
        backgroundColor: "#000000",
        opacity: 0.6,
        borderRadius: 10,

    },
    box:{
        height:150,
        marginTop: -150,
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        fontSize: 24,
        color: "#FFFFFF",
    }
})