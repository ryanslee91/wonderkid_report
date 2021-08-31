import {React, useEffect} from 'react'
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { getAllPlayers } from '../../services/players';
import './PlayerCard.css'


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
    <div className="player-card">
     
    {players.map((player) => (
      <div key={player.id}>
        <Link id="playerLink" to={`/players/${player.id}`} key={player.id}>
        <div className='player-image'>
            <img id="playerImg" src={player.img_url}></img>
          </div>
          <div className='player-name'>
            <p id="p-name"><span id="pNameSpan">{player.name}</span></p>
            </div>
        </Link> 
      </div>
    ))}
  </div>
);
}


