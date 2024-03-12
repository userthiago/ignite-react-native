import { Image } from "react-native";
import {
  Center,
  Heading,
  Text,
  VStack,
  ScrollView,
} from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

import { AuthNavigatorRouteProps } from "@routes/auth.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import LogoSvg from "@assets/logo.svg";
import BackgroundImg from "@assets/background.png";

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRouteProps>();

  function handleNewAcount() {
    navigation.navigate("signUp");
  }

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
        <Center mt="$16">
          <Heading
            color="$gray100"
            fontSize="$xl"
            mb="$6"
            fontFamily="$heading"
          >
            Acesse sua conta
          </Heading>
          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input placeholder="Senha" secureTextEntry />
          <Button title="Acessar" />
        </Center>
        <Center mt="$24">
          <Text color="$gray100" fontSize="$sm" mb="$3" fontFamily="$body">
            Ainda não tem acesso?
          </Text>
          <Button
            title="Criar conta"
            variant="outline"
            onPress={handleNewAcount}
          />
        </Center>
      </VStack>
    </ScrollView>
  );
}
