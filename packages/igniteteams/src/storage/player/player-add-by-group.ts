import uuid from "react-native-uuid";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@utils/app-error";
import { PLAYER_COLLECTION } from "@storage/storage-config";
import { PlayerStorageDTO } from "./player-storage-dto";
import { playersGetByGroup } from "./players-get-by-group";

export async function playerAddByGroup(
  newPlayer: Omit<PlayerStorageDTO, "id">,
  groupId: string
) {
  try {
    const storedPlayers = await playersGetByGroup(groupId);
    const playerAlreadyExists = storedPlayers.find(
      (player) => player.name.toLowerCase() === newPlayer.name.toLowerCase()
    );

    if (playerAlreadyExists) {
      throw new AppError("Essa pessoa já está adicionada em um time.");
    }

    const playerData: PlayerStorageDTO = {
      id: uuid.v4() as string,
      ...newPlayer,
    };

    const storage = JSON.stringify([...storedPlayers, playerData]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groupId}`, storage);
  } catch (error) {
    throw error;
  }
}
