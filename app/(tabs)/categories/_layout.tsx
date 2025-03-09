import { Stack } from "expo-router";

export default function CategoryLayout (){
    return(
        <Stack>
            <Stack.Screen
                name="list"
                options={{ title: "Categories" }}
            />

            <Stack.Screen name="[id]"/>
        </Stack>
    )
}