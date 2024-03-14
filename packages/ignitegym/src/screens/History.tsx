import { useState } from "react";
import { SectionList } from "react-native";
import { Heading, Text, VStack, useStyled } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const {
    config: { tokens },
  } = useStyled();
  const [exercises, setExercises] = useState([
    {
      title: "26.08.22",
      data: ["Puxada frontal", "Puxada unilateral"],
    },
    {
      title: "27.08.22",
      data: ["Puxada frontal"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />
      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            color="$gray200"
            fontSize="$md"
            mt="$10"
            mb="$3"
            bg="$gray700"
          >
            {section.title}
          </Heading>
        )}
        contentContainerStyle={
          exercises.length === 0
            ? {
                flex: 1,
                justifyContent: "center",
                paddingHorizontal: tokens.space["8"],
              }
            : { paddingHorizontal: tokens.space["8"] }
        }
        ListEmptyComponent={() => (
          <Text color="$gray100" textAlign="center">
            Não há exercícios registrados ainda.{"\n"}Vamos fazer exercícios
            hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
