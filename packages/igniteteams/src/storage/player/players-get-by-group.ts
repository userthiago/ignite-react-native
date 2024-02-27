import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION } from "@storage/storage-config";
import { PlayerStorageDTO } from "./player-storage-dto";

export async function playersGetByGroup(groupId: string) {
  try {
    const key = `${PLAYER_COLLECTION}-${groupId}`;
    const storage = await AsyncStorage.getItem(key);
    const players: PlayerStorageDTO[] = storage ? JSON.parse(storage) : [];

    return players;
  } catch (error) {
    throw error;
  }
}
