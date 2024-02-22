import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTypeStyleProps, Title } from "./styles";

type ButtonType = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "primary", ...rest }: ButtonType) {
  return (
    <ButtonContainer type={type} {...rest}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
}
