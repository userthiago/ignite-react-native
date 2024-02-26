import { Header } from "@components/Header";
import { Icon, NewGroupContainer, NewGroupContent } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";
import { Input } from "@components/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();

  function handleCreateGroup() {
    navigation.navigate("players", { group: "Rocket" });
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
        <Input placeholder="Nome da turma" />
        <Button
          title="Criar"
          style={{ marginTop: 20 }}
          onPress={handleCreateGroup}
        />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
