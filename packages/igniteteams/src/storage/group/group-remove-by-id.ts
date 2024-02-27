import AsyncStorage from "@react-native-async-storage/async-storage";
import { groupsGetAll } from "./groups-get-all";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storage-config";

export async function groupRemoveById(groupId: string) {
  try {
    const storedGroups = await groupsGetAll();
    const groups = storedGroups.filter((group) => group.id !== groupId);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupId}`);
  } catch (error) {
    throw error;
  }
}
