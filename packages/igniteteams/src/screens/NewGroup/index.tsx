import { useState } from "react";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";

import { groupCreate } from "@storage/group/group-create";
import { AppError } from "@utils/app-error";

import { Icon, NewGroupContainer, NewGroupContent } from "./styles";

export function NewGroup() {
  const [group, setGroup] = useState("");
  const navigation = useNavigation();

  function handleGroupName(name: string) {
    setGroup(name);
  }

  async function handleCreateGroup() {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo", "Informe o nome da turma.");
      }
      const data = await groupCreate(group);

      navigation.navigate("players", { groupId: data.id });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        console.log(error);
        Alert.alert("Novo Grupo", "Não foi possível criar um novo grupo.");
      }
    }
  }

  return (
    <NewGroupContainer>
      <Header showBackButton />
      <NewGroupContent>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Input placeholder="Nome da turma" onChangeText={handleGroupName} />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
