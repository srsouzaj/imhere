import { Text, View } from "react-native";

import { styles } from "./styles";

export default function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                It's my birthday!
            </Text>

            <Text style={styles.eventDate}>
                Quinta, 30 de março de 2023.
            </Text>
        </View>
    )
}