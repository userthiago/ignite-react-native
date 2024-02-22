import { Header } from "@components/Header";
import { Container, GroupList } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { useState } from "react";
import { ListEmpty } from "@components/ListEmpty";

export function Groups() {
  const [groups, setGroups] = useState(["Grupo da Athena"]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        scrollEnabled={groups.length > 0}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />
    </Container>
  );
}
