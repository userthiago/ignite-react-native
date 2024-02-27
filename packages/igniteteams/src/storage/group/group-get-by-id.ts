import { groupsGetAll } from "./groups-get-all";

export async function groupGetById(groupId: string) {
  try {
    const storedGroups = await groupsGetAll();

    return storedGroups.find((storedGroup) => storedGroup.id === groupId);
  } catch (error) {
    throw error;
  }
}
