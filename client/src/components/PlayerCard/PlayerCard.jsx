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
    <>
    <div className="player-card">
        {players.map((player) => (
        <Link to={`/players/${player.id}`} key={player.id}>
          <div className='player-image'>
            <img src={player.img_url}></img>
          </div>
          <div className='player-name'>
            {player.name}
          </div>
        </Link>
      ))}
      </div>
      </>
  )
}