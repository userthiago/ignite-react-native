import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #000000;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 24px;
  font-weight: bold;
`;
