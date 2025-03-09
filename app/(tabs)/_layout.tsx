import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout(){
    return(
        <Tabs screenOptions={{ tabBarActiveTintColor: "#0000ff" }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    tabBarIcon:({ color }) => <FontAwesome
                        size={28}
                        name="home"
                        color={color}
                    />
                }}
            />

            {/* <Tabs.Screen
                name="categories"
                options={{
                    title: "Categories",
                    tabBarIcon:({ color }) => <FontAwesome
                        size={28}
                        name="archive"
                        color={color}
                    />
                }}
            />*/}

            <Tabs.Screen
                name="about"
                options={{
                    title: "About",
                    tabBarIcon:({ color }) => <FontAwesome
                        size={28}
                        name="user"
                        color={color}
                    />
                }}
            />
        </Tabs>
    )
}