import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./player-storage-dto";
import { PLAYER_COLLECTION } from "@storage/storage-config";
import { playersGetByGroup } from "./players-get-by-group";
import { AppError } from "@utils/app-error";

export async function playerAddByGroup(
  newPlayer: PlayerStorageDTO,
  groupId: string
) {
  try {
    const storedPlayers = await playersGetByGroup(groupId);
    const playerAlreadyExists = storedPlayers.filter(
      (player) => player.name.toLowerCase() === newPlayer.name.toLowerCase()
    );

    if (playerAlreadyExists) {
      throw new AppError("Essa pessoa já está adicionada em um time.");
    }

    const storage = JSON.stringify([...storedPlayers, newPlayer]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groupId}`, storage);
  } catch (error) {
    throw error;
  }
}
