import { useState } from "react";
import { VStack, HStack, useStyled } from "@gluestack-ui/themed";

import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { FlatList } from "react-native";

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
              isActive={groupSelected === item}
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
    </VStack>
  );
}
