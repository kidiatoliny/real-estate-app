import {View} from "react-native";
import SignIn from "@/app/sign-in";

export default function Index() {
    return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <SignIn/>
        </View>
    );
}
