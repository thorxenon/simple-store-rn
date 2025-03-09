import { Pressable, View, Text, StyleSheet } from "react-native";

type ButtonProps={
    text: string;
    onClick: () => void;
}

export const Button = ({ text, onClick  }: ButtonProps) =>{
    return(
        <Pressable
            onPress={onClick}
            style={styles.button}
        >
            <Text style={styles.btnText}>{text}</Text>
        </Pressable>
    )
}


const styles = StyleSheet.create({
    button:{
        backgroundColor: "#164e85",
        borderRadius: 10,
        paddingVertical: 15,
        paddingHorizontal: 25,
        marginTop: 20
    },
    btnText:{
        fontSize: 16,
        alignItems: "center",
        color:"#ffffff",
        fontWeight: "light"
    }
})