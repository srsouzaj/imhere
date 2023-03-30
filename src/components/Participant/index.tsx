import { Text, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

interface ParticipantInterface {
    name: string
}

export function Participant({ name }: ParticipantInterface) {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>
                {name}
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                    -
                </Text>
            </TouchableOpacity>
        </View>
    )
}