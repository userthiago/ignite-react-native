import { ButtonText, Button as GluestackButton } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

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
