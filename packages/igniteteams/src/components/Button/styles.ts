import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonTypeStyleProps = "primary" | "secondary";

type ButtonContainerProps = {
  type: ButtonTypeStyleProps;
};

export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme, type }) =>
    type === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK};
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;
`;

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;
