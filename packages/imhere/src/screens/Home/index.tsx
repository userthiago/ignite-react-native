import { useState } from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import uuid from "react-native-uuid";

import { Participant } from "../../components/Participant";
import { EmptyParticipantListText } from "../../components/EmptyParticipantListText";
import { ParticipantType } from "../../types/participant-type";

import { styles } from "./styles";

export function Home() {
  const [participantName, setParticipantName] = useState("");
  const [participantList, setParticipantList] = useState<ParticipantType[]>([]);

  const handleParticipantAdd = () => {
    const newParticipant = {
      id: uuid.v4() as string,
      name: participantName,
    };
    setParticipantList((prevState) => [...prevState, newParticipant]);
    setParticipantName("");
  };

  const handleParticipantRemove = (data: ParticipantType) => {
    Alert.alert(
      "Remove participant",
      `Do you really want to remove ${data.name} from this event?`,
      [
        {
          text: "Yes",
          onPress: () =>
            setParticipantList((oldParticipantList) =>
              oldParticipantList.filter(
                (oldParticipant) => oldParticipant.id !== data.id
              )
            ),
        },
        { text: "No", style: "cancel" },
      ]
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
          value={participantName}
          onChangeText={setParticipantName}
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
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        ListEmptyComponent={EmptyParticipantListText}
      />
    </View>
  );
}
