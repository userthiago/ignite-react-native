import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Filter } from "@components/Filter";
import { Input } from "@components/Input";
import { PlayerCard } from "@components/PlayerCard";
import { Button } from "@components/Button";
import { ListEmpty } from "@components/ListEmpty";

import { Form, HeaderList, PlayersAmount, PlayersContainer } from "./styles";
import { GroupStorageDTO } from "@storage/group/group-storage-dto";
import { groupGetById } from "@storage/group/group-get-by-id";
import { AppError } from "@utils/app-error";

type RouteParams = {
  groupId: string;
};

export function Players() {
  const [team, setTeam] = useState("Time A");
  const [groupData, setGroupData] = useState<GroupStorageDTO | undefined>();
  const [players, setPlayers] = useState([]);
  const navigation = useNavigation();

  const route = useRoute();
  const { groupId } = route.params as RouteParams;

  const handleChangeTeam = (team: string) => {
    setTeam(team);
  };

  const fetchGroupData = async () => {
    try {
      const storedGroup = await groupGetById(groupId);

      if (!storedGroup) {
        Alert.alert(
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
        setGroupData(storedGroup);
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
      }
    }
  };

  useEffect(() => {
    fetchGroupData();
  }, []);

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
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
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
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
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
      <Button title="Remover turma" type="SECONDARY" />
    </PlayersContainer>
  );
}
