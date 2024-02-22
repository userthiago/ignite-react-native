import { HighlightContainer, Title, Subtitle } from "./styles";

type HighlightProps = {
  title: string;
  subtitle: string;
};

export function Highlight({ title, subtitle }: HighlightProps) {
  return (
    <HighlightContainer>
      <Title>{title}</Title>
      <Subtitle>{subtitle}</Subtitle>
    </HighlightContainer>
  );
}
