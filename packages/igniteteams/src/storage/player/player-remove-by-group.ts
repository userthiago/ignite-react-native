import AsyncStorage from "@react-native-async-storage/async-storage";
import { playersGetByGroup } from "./players-get-by-group";
import { PLAYER_COLLECTION } from "@storage/storage-config";

export async function playerRemoveByGroup(playerId: string, groupId: string) {
  try {
    const storage = await playersGetByGroup(groupId);

    const filtered = storage.filter((player) => player.id !== playerId);
    const players = JSON.stringify(filtered);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${groupId}`, players);
  } catch (error) {
    throw error;
  }
}
