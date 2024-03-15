import { InputField, Input as GluestackInput } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

export function Input({
  bg = "$gray700",
  states,
  ...rest
}: ComponentProps<typeof InputField>) {
  return (
    <GluestackInput
      bg={bg}
      w="$full"
      h="$14"
      px="$3"
      borderWidth={1}
      borderColor="$gray700"
      mb="$4"
      rounded="$md"
      $focus-backgroundColor="$gray700"
      $focus-borderWidth={1}
      $focus-borderColor="$green500"
      states={states}
    >
      <InputField
        fontSize="$md"
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        states={states}
        {...rest}
      />
    </GluestackInput>
  );
}
