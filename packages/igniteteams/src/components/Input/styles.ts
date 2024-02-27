import styled from "styled-components/native";
import { TextInput } from "react-native";

export const InputContainer = styled(TextInput)`
  flex: 1;

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  min-height: 56px;
  max-height: 56px;
  padding: 16px;
  border-radius: 6px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`;
