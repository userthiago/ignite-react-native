import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconTypeStyleProps = "PRIMARY" | "SECONDARY";

type ButtonIconStyleProps = {
  type: ButtonIconTypeStyleProps;
};

export const ButtonIconContainer = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;

  width: 56px;
  height: 56px;
  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<ButtonIconStyleProps>(
  ({ theme, type }) => ({
    size: 24,
    color: type === "PRIMARY" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
