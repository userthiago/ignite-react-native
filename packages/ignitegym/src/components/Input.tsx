import { InputField, Input as GluestackInput } from "@gluestack-ui/themed";
import { ComponentProps } from "react";

type InputProps = ComponentProps<typeof InputField> & {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isHovered?: boolean;
  isFocused?: boolean;
  isRequired?: boolean;
  isReadOnly?: boolean;
};

export function Input({
  bg = "$gray700",
  isInvalid,
  isDisabled,
  isHovered,
  isFocused,
  isRequired,
  isReadOnly,
  ...rest
}: InputProps) {
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
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isHovered={isHovered}
      isFocused={isFocused}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
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
