import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Skeleton } from "moti/skeleton";
import { Center, ScrollView, VStack, useStyled } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Text } from "@gluestack-ui/themed";
import { Input } from "@components/Input";

const PHOTO_SIZE = "33";

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const {
    config: { tokens },
  } = useStyled();

  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />
      <ScrollView>
        <Center mt="$6" px="$10">
          <Skeleton
            colorMode="dark"
            radius="round"
            height={tokens.space[PHOTO_SIZE]}
            width={tokens.space[PHOTO_SIZE]}
            show={photoIsLoading}
          >
            <UserPhoto
              source={{
                uri: "https://avatars.githubusercontent.com/u/37296704?v=4",
              }}
              alt="Foto do usuário"
              size={`$${PHOTO_SIZE}`}
            />
          </Skeleton>
          <TouchableOpacity>
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              lineHeight="$lg"
              mt="$2"
              mb="$8"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
          <Input placeholder="Nome" bg="$gray600" />
          <Input placeholder="E-mail" bg="$gray600" isDisabled />
        </Center>
      </ScrollView>
    </VStack>
  );
}
