import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import {
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  useStyled,
} from "@gluestack-ui/themed";
import { Entypo } from "@expo/vector-icons";

type ExerciseProps = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: ExerciseProps) {
  const {
    config: { tokens },
  } = useStyled();

  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="$gray500"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: "https://www.origym.com.br/midia/remada-unilateral-3.jpg",
          }}
          alt="Imagem do exercício"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />
        <VStack flex={1}>
          <Heading fontSize="$lg" color="$white" lineHeight="$xl">
            Remada unilateral
          </Heading>
          <Text
            fontSize="$sm"
            color="$gray200"
            mt="$1"
            numberOfLines={2}
            lineHeight="$md"
          >
            3 séries x 12 repetições
          </Text>
        </VStack>
        <Entypo
          name="chevron-thin-right"
          color={tokens.colors.gray300}
          size={tokens.fontSizes.md}
        />
      </HStack>
    </TouchableOpacity>
  );
}
