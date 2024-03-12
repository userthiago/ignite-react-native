import { Image } from "react-native";
import {
  Center,
  Heading,
  Text,
  VStack,
  ScrollView,
} from "@gluestack-ui/themed";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

export function SignUp() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px="$10">
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
          <Heading
            color="$gray100"
            fontSize="$xl"
            mb="$6"
            fontFamily="$heading"
          >
            Criar sua conta
          </Heading>
          <Input placeholder="Nome" />
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Criar e acessar" />
        </Center>
        <Button title="Voltar ao login" variant="outline" mt="$24" />
      </VStack>
    </ScrollView>
  );
}
