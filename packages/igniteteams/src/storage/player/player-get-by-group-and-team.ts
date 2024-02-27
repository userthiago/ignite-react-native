import { playersGetByGroup } from "./players-get-by-group";

export async function playerGetByGroupAndTeam(groupId: string, teamId: string) {
  try {
    const storage = await playersGetByGroup(groupId);

    const players = storage.filter((player) => player.teamId === teamId);

    return players;
  } catch (error) {
    throw error;
  }
}
