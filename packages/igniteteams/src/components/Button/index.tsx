import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, ButtonTypeStyleProps, Title } from "./styles";

type ButtonType = TouchableOpacityProps & {
  title: string;
  type?: ButtonTypeStyleProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: ButtonType) {
  return (
    <ButtonContainer type={type} {...rest}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
}
