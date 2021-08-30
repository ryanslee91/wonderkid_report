import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { getAllPlayers, postPlayer, putPlayer, deletePlayer } from '../services/players';
import { getAllLeagues, addLeagueToPlayer } from '../services/leagues';
import Home from '../screens/Home/Home';
import PlayerDetail from '../screens/PlayerDetail/PlayerDetail';
import PlayerCreate from '../screens/PlayerCreate/PlayerCreate';

export default function MainContainer(props) {
  const [players, setPlayers] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const history = useHistory;

  useEffect(() => {
    const fetchPlayers = async () => {
      const players = await getAllPlayers();
      setPlayers(players)
    }
    fetchPlayers();
  }, [])

  useEffect(() => {
    const fetchLeagues = async () => {
      const leagues = await getAllLeagues();
      setLeagues(leagues)
    }
    fetchLeagues();
  }, [])

  const handleCreate = async (formData, leagueId) => {
    const newPlayer = await postPlayer(formData);
    setPlayers((prevState) => [...prevState, newPlayer]);
    handleLeagueAdd(leagueId, newPlayer.id)
    history.push("/")
  }

  const handleLeagueAdd = async (leagueId, playerId) => {
    const updatedPlayer = await addLeagueToPlayer(leagueId, playerId);
    setPlayers((prevState) => 
      prevState.map((player) => {
        return player.playerId === Number(playerId)
          ? updatedPlayer
          : player;
    })
    )
    history.push(`/players/${playerId}`)
  }

  return (
    <div>
      <Switch>
      <Route exact path="/">
        <Home players={players} leagues={leagues} />
      </Route>
      <Route path='/players/:id'>
          <PlayerDetail leagues={leagues} />
      </Route>
        <Route path='/players/new'>
          <PlayerCreate handleCreate={handleCreate} />
        </Route>
        </Switch>
    </div>
  )
}
