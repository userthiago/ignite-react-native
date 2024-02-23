import styled from "styled-components/native";

export const PlayersContainer = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Form = styled.View`
  flex-direction: row;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  width: 100%;
  border-radius: 6px;
`;
