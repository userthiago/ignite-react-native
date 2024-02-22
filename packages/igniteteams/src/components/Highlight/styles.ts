import styled from "styled-components/native";

export const HighlightContainer = styled.View`
  gap: 4px;

  width: 100%;
  margin: 32px 0;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
