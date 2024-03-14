import { useState } from "react";
import { VStack, HStack, useStyled, Heading, Text } from "@gluestack-ui/themed";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList } from "react-native";
import { ExerciseCard } from "@components/ExerciseCard";

export function Home() {
  const {
    config: { tokens },
  } = useStyled();
  const [groups, setGroups] = useState<string[]>([
    "costas",
    "bíceps",
    "tríceps",
    "ombro",
  ]);
  const [exercises, setExercises] = useState([
    "Puxada frontal",
    "Remada curvada",
    "Remada unilateral",
    "Levantamento terra",
  ]);
  const [groupSelected, setGroupSelected] = useState("costas");

  return (
    <VStack flex={1}>
      <HomeHeader />
      <HStack>
        <FlatList
          data={groups}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Group
              name={item}
              isActive={
                groupSelected.toLocaleUpperCase() === item.toLocaleUpperCase()
              }
              onPress={() => setGroupSelected(item)}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: tokens.space["8"],
            marginVertical: tokens.space["10"],
            maxHeight: tokens.space["10"],
          }}
        />
      </HStack>
      <VStack px="$8" flex={1}>
        <HStack justifyContent="space-between" alignItems="center" mb="$5">
          <Heading color="$gray200" fontSize="$md">
            Exercícios
          </Heading>
          <Text color="$gray200" fontSize="$sm">
            {exercises.length}
          </Text>
        </HStack>
        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => <ExerciseCard />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: tokens.space["10"] }}
        />
      </VStack>
    </VStack>
  );
}
