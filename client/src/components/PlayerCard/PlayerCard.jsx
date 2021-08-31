import {React, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { getAllPlayers } from '../../services/players';


export default function PlayerCard(props) {
  const [players, setPlayers] = useState([]);
  

  useEffect(() => {
    const fetchPlayers = async () => {
      let res = await getAllPlayers()
      // console.log(res.data)
      setPlayers(res)
    }
    fetchPlayers()
  }, [])

  return (
    <div>
    {players.map((player) => (
      <div key={player.id}>
        <Link to={`/players/${player.id}`} key={player.id}>
        <img src={player.img_url}></img>
          <p>{player.name}</p>
        </Link> 
      </div>
    ))}
  </div>
);
}


