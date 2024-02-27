import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/app-error";

import { groupsGetAll } from "./groups-get-all";
import { GROUP_COLLECTION } from "@storage/storage-config";

export async function groupCreate(newGroup: string) {
  try {
    const storedGroups = await groupsGetAll();

    const groupAlreadyExists = storedGroups
      .map((group) => group.toLowerCase())
      .includes(newGroup.trim().toLowerCase());

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo cadastrado com esse nome.");
    }

    const storage = JSON.stringify([...storedGroups, newGroup.trim()]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
