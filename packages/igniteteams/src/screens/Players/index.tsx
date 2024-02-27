import { useEffect, useRef, useState } from "react";
import { Alert, FlatList, TextInput } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";

import { AppError } from "@utils/app-error";
import { GroupStorageDTO } from "@storage/group/group-storage-dto";
import { groupGetById } from "@storage/group/group-get-by-id";
import { PlayerStorageDTO } from "@storage/player/player-storage-dto";
import { playerAddByGroup } from "@storage/player/player-add-by-group";
import { playerGetByGroupAndTeam } from "@storage/player/player-get-by-group-and-team";

import { Form, HeaderList, PlayersAmount, PlayersContainer } from "./styles";
import { playerRemoveByGroup } from "@storage/player/player-remove-by-group";
import { groupRemoveById } from "@storage/group/group-remove-by-id";

type RouteParams = {
  groupId: string;
};

const DEFAULT_TEAMS = ["Time A", "Time B"];

export function Players() {
  const newPlayerNameInputRef = useRef<TextInput>();
  const [newPlayerName, setNewPlayerName] = useState("");
  const [team, setTeam] = useState(DEFAULT_TEAMS[0]);
  const [groupData, setGroupData] = useState<GroupStorageDTO | undefined>();
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const navigation = useNavigation();

  const route = useRoute();
  const { groupId } = route.params as RouteParams;

  const handleChangeNewPlayerName = (name: string) => {
    setNewPlayerName(name);
  };

  const handleAddPlayer = async () => {
    const name = newPlayerName.trim();
    if (name.length === 0) {
      return Alert.alert(
        "Novo Participante",
        "Informe o nome do participante para adicionar."
      );
    }

    const newPlayer: Omit<PlayerStorageDTO, "id"> = {
      name: name,
      teamId: team,
    };

    try {
      await playerAddByGroup(newPlayer, groupData.id);
      newPlayerNameInputRef.current?.blur();
      setNewPlayerName("");
      fetchPlayersByTeam();
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Participante", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo Participante", "Não foi possível adicionar.");
      }
    }
  };

  const handleChangeTeam = (team: string) => {
    setTeam(team);
  };

  const fetchPlayersByTeam = async () => {
    try {
      const playersByTeam = await playerGetByGroupAndTeam(groupId, team);
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Participantes",
        "Não foi possível carregar os participantes do time selecionado."
      );
    }
  };

  const fetchGroupData = async () => {
    try {
      const storedGroup = await groupGetById(groupId);

      if (!storedGroup) {
        return Alert.alert(
          "Dados da Turma",
          "Não foi encontrado os dados referente a esta turma.",
          [
            {
              text: "Entendi",
              onPress: () => {
                navigation.navigate("groups");
              },
            },
          ]
        );
      } else {
        return setGroupData(storedGroup);
      }
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Dados da Turma", error.message, [
          {
            text: "Entendi",
            onPress: () => {
              navigation.navigate("groups");
            },
          },
        ]);
      } else {
        console.log(error);
        Alert.alert(
          "Dados da Turma",
          "Não foi possível buscar os dados da turma.",
          [
            {
              text: "Entendi",
              onPress: () => {
                navigation.navigate("groups");
              },
            },
          ]
        );
      }
    }
  };

  const handlePlayerRemove = async (playerId: string) => {
    try {
      await playerRemoveByGroup(playerId, groupData.id);
      fetchPlayersByTeam();
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Remover Participante",
        "Não foi possível remover o participante selecionado."
      );
    }
  };

  const groupRemove = async () => {
    try {
      await groupRemoveById(groupId);
      navigation.navigate("groups");
    } catch (error) {
      console.log(error);
      Alert.alert("Remover Turma", "Não foi possível remover a turma.");
    }
  };

  const handleGroupRemove = async () => {
    Alert.alert("Remover Turma", "Deseja continuar com a remoção da turma?", [
      {
        text: "Não",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: () => groupRemove(),
      },
    ]);
  };

  useEffect(() => {
    fetchGroupData();
  }, []);

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team]);

  if (groupData === undefined) {
    return (
      <PlayersContainer>
        <Header showBackButton />
        <Highlight
          title="Aguarde"
          subtitle="estamos carregando as informações da turma!"
        />
      </PlayersContainer>
    );
  }

  return (
    <PlayersContainer>
      <Header showBackButton />
      <Highlight
        title={groupData.name}
        subtitle="adicione a galera e separe os times"
      />
      <Form>
        <Input
          placeholder="Nome do participante"
          autoCorrect={false}
          onChangeText={handleChangeNewPlayerName}
          inputRef={newPlayerNameInputRef}
          value={newPlayerName}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>
      <HeaderList>
        <FlatList
          data={DEFAULT_TEAMS}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => handleChangeTeam(item)}
            />
          )}
          horizontal
        ></FlatList>
        <PlayersAmount>{players.length}</PlayersAmount>
      </HeaderList>
      <FlatList
        data={players}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <PlayerCard
            name={item.name}
            onRemove={() => handlePlayerRemove(item.id)}
          />
        )}
        showsVerticalScrollIndicator={false}
        scrollEnabled={players.length > 0}
        contentContainerStyle={[
          { paddingBottom: 40 },
          players.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
      />
      <Button
        title="Remover turma"
        type="SECONDARY"
        onPress={handleGroupRemove}
      />
    </PlayersContainer>
  );
}
