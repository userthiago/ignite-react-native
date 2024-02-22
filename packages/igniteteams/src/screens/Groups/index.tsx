import { Header } from "@components/Header";
import { Container, Title } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subtitle="jogue com a sua turma" />
      <GroupCard title="Nome da turma" />
      <GroupCard title="Nome da turma" />
    </Container>
  );
}
