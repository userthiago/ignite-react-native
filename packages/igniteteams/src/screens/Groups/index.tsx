import { useState, useCallback } from "react";
import { FlatList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

import { groupsGetAll } from "@storage/group/groups-get-all";
import { GroupStorageDTO } from "@storage/group/group-storage-dto";

import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<GroupStorageDTO[]>([]);
  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  async function fetchGroups() {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleOpenGroup(groupId: string) {
    navigation.navigate("players", { groupId });
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <FlatList
        data={groups}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <GroupCard
            title={item.name}
            onPress={() => handleOpenGroup(item.id)}
          />
        )}
        scrollEnabled={groups.length > 0}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}
