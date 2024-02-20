import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Participant } from "../../components/Participant";

import { styles } from "./styles";
import { EmptyParticipantListText } from "../../components/EmptyParticipantListText";

export function Home() {
  const [participantList, setParticipantList] = useState<
    { id: string; name: string }[]
  >([
    {
      id: "0",
      name: "Thiago Santos",
    },
    {
      id: "1",
      name: "Naila Rocco",
    },
  ]);

  const handleParticipantAdd = () => {
    console.log("Participant added");
  };

  const handleParticipantRemove = (id: string) => {
    setParticipantList((oldParticipantList) =>
      oldParticipantList.filter((oldParticipant) => oldParticipant.id !== id)
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Participant name"
          placeholderTextColor="#6B6B6B"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.participantListContainer}
        data={participantList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Participant
            key={item.id}
            name={item.name}
            onRemove={() => handleParticipantRemove(item.id)}
          />
        )}
        ListEmptyComponent={EmptyParticipantListText}
      />
    </View>
  );
}
