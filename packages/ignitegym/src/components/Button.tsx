import { ComponentProps } from "react";
import { ButtonText, Button as GluestackButton } from "@gluestack-ui/themed";

type ButtonProps = ComponentProps<typeof GluestackButton> & {
  title: string;
};

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <GluestackButton h="$14" {...rest}>
      <ButtonText>{title}</ButtonText>
    </GluestackButton>
  );
}
