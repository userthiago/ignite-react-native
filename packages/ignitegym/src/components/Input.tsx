import { InputField, Input as GluestackInput } from "@gluestack-ui/themed";
import { TextInputProps } from "react-native";

export function Input({ ...rest }: TextInputProps) {
  return (
    <GluestackInput
      bg="$gray700"
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
    >
      <InputField
        fontSize="$md"
        color="$white"
        fontFamily="$body"
        placeholderTextColor="$gray300"
        {...rest}
      />
    </GluestackInput>
  );
}
