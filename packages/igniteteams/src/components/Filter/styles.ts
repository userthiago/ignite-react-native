import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const FilterContainer = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GREEN_700};
    `}

  align-items: center;
  justify-content: center;

  height: 38px;
  width: 70px;
  border-radius: 4px;
  margin-right: 12px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-transform: uppercase;
`;
