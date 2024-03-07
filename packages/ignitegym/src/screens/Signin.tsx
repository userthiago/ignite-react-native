import { Image } from "react-native";
import { VStack } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";

export function SignIn() {
  return (
    <VStack flex={1} bg="$gray700">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        style={{ position: "absolute", top: 0 }}
      />
    </VStack>
  );
}
