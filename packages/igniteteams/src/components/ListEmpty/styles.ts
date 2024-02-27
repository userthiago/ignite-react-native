import styled from "styled-components/native";

export const ListEmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
