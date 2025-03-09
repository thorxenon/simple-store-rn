import { FlatList, StyleSheet, Text, View } from "react-native";
import { getCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/category-item";

export default function Screen(){
    const categories = getCategories();

    return(
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={ ({ item })=> <CategoryItem
                    id={item.id}
                    title={item.title}
                    cover={item.cover}
                /> }
                keyExtractor={item=> item.id.toString()}
                style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    list:{
        flex:1,
        width:"100%",
        padding: 20
    }
})