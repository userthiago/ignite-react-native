import { Header } from "@components/Header";
import { Icon, NewGroupContainer, NewGroupContent } from "./styles";
import { Highlight } from "@components/Highlight";
import { Button } from "@components/Button";

export function NewGroup() {
  return (
    <NewGroupContainer>
      <Header showBackButton />
      <NewGroupContent>
        <Icon />
        <Highlight
          title="Nova Turma"
          subtitle="crie uma turma para adicionar pessoas"
        />
        <Button title="Criar" />
      </NewGroupContent>
    </NewGroupContainer>
  );
}
