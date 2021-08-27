import api from './api-config';

export const getAllLeagues = async () => {
  const resp = await api.get('/leagues');
  return resp.data;
}

export const addLeagueToPlayer = async (playerId, leagueId) => {
  const resp = await api.get(`/players/${playerId}/leagues/${leagueId}`)
  return resp.data;
}
