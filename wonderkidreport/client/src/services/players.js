import api from './api-config';

export const getAllPlayers = async () => {
  const resp = await api.get('/players');
  return resp.data;
}

export const getOnePlayer = async (id) => {
  const resp = await api.get(`/players/${id}`);
  return resp.data;
}

export const postPlayer = async (playerData) => {
  const resp = await api.post('/players', { player: playerData });
  return resp.data;
}

export const putPlayer = async (id, playerData) => {
  const resp = await api.put(`/players/${id}`, { player: playerData })
  return resp.data;
}

export const deletePlayer = async (id) => {
  try {
    await api.delete(`/players/${id}`);
  } catch (e) {
    return { errors: e }
  }
}