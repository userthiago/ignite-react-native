import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { HStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
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
      <VStack>
        <Text color="$gray100" fontSize="$md" lineHeight="$lg">
          Olá,{" "}
        </Text>
        <Heading color="$gray100" fontSize="$md" lineHeight="$lg">
          Thiago Santos
        </Heading>
      </VStack>
    </HStack>
  );
}
