import { Pressable, Text } from "@gluestack-ui/themed";
import { PressableProps } from "react-native";

type GroupProps = PressableProps & {
  name: string;
  isActive: boolean;
};

export function Group({ name, isActive, ...rest }: GroupProps) {
  return (
    <Pressable
      mr="$3"
      w="$24"
      h="$10"
      bg="$gray600"
      rounded="$md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      states={{ active: isActive }}
      $active={{
        borderColor: "$green500",
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        color={isActive ? "$green500" : "$gray200"}
        textTransform="uppercase"
        fontSize="$xs"
        fontFamily="$heading"
      >
        {name}
      </Text>
    </Pressable>
  );
}
