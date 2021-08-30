import React from 'react'
import { Link } from 'react-router-dom';

export default function PlayerCard(props) {

  return (
    <div className="player-card">
      {players.map((player) => (
        <Link to={`/player/${player._id}`} key={player._id}>
       
          <div className='player-image'>
            {player.img_url}
          </div>
          <div className='player-name'>
            {player.name}
          </div>
        </Link>
      ))}
    </div>
  )
}
