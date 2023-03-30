import { Text, TextInput, TouchableOpacity, View, ScrollView } from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./style";

export function Home() {
    const participants = ['Jorge', 'Vini', 'Diego', 'Cleiton', 'Ana', 'Maria', 'Jack', 'Mayk', 'Roney'];

    function handleParticipantAdd() {
        console.log("Você clicou no botão de Adicionar!");
    }

    function handleParticipantRemove(name: string) {
        console.log(`Você clicou em remover o participante ${name}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>
                Nome do evento
            </Text>

            <Text style={styles.eventDate}>
                Sexta, 31 de março de 2023.
            </Text>

            <View style={styles.form}>
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

            <ScrollView showsVerticalScrollIndicator={false}>
                {
                    participants.map(participant => (
                        <Participant
                            key={participant}
                            name={participant}
                            onRemove={() => handleParticipantRemove(participant)}
                        />
                    ))
                }
            </ScrollView>
        </View>
    )
}