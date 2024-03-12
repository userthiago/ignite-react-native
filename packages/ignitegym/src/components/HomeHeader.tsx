import { TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Heading, HStack, Text, useStyled, VStack } from "@gluestack-ui/themed";

import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  const {
    config: { tokens },
  } = useStyled();

  return (
    <HStack bg="$gray600" pt="$16" pb="$5" px="$8" alignItems="center">
      <UserPhoto
        source={{
          uri: "https://avatars.githubusercontent.com/u/37296704?v=4",
        }}
        alt="Imagem do usuário"
        size="$16"
        mr="$4"
      />
      <VStack flex={1}>
        <Text color="$gray100" fontSize="$md" lineHeight="$lg">
          Olá,{" "}
        </Text>
        <Heading color="$gray100" fontSize="$md" lineHeight="$lg">
          Thiago Santos
        </Heading>
      </VStack>
      <TouchableOpacity>
        <MaterialIcons
          name="logout"
          color={tokens.colors.gray200}
          size={tokens.space["7"]}
        />
      </TouchableOpacity>
    </HStack>
  );
}
