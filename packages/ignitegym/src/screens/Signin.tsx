import { Image } from "react-native";
import { Center, Heading, Text, VStack } from "@gluestack-ui/themed";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";
import { Input } from "@components/Input";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700" px="$10">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        style={{ position: "absolute", top: 0 }}
      />
      <Center my="$32">
        <LogoSvg />
        <Text color="$gray100" fontSize="$sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>
      <Center>
        <Heading color="$gray100" fontSize="$xl" mb="$6" fontFamily="$heading">
          Acesse sua conta
        </Heading>
        <Input
          placeholder="E-mail"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Input placeholder="Senha" secureTextEntry />
      </Center>
    </VStack>
  );
}
