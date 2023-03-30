import { Text, TextInput, TouchableOpacity, View } from "react-native";

import { styles } from "./style";

export function Home() {

    function handleParticipantAdd() {
        console.log("Você clicou no botão de Adicionar!");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 31 de março de 2023.
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Nome do participante"
                placeholderTextColor="#6B6B6B"
            />

            <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
                <Text style={styles.buttonText}>
                    +
                </Text>
            </TouchableOpacity>
        </View>
    )
}