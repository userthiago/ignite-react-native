import { ButtonText, Button as GluestackButton } from "@gluestack-ui/themed";
import { ButtonProps as RNButtonProps } from "react-native";

type ButtonProps = RNButtonProps & {
  title: string;
};
export function Button({ title, ...rest }: ButtonProps) {
  return (
    <GluestackButton
      w="$full"
      h="$14"
      bgColor="$green700"
      rounded="$md"
      $active-bg="$green500"
      {...rest}
    >
      <ButtonText color="$white" fontFamily="$heading" fontSize="$sm">
        {title}
      </ButtonText>
    </GluestackButton>
  );
}
