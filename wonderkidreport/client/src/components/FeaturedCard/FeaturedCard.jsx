import { useState, useEffect } from 'react';
import { getAllPlayers } from '../../services/players';
import { Link } from 'react-router-dom';

export default function FeaturedCard() {
  const [players, setPlayers] = useState([]);


  useEffect(() => {
    const fetchPlayers = async () => {
      let res = await getAllPlayers()
      console.log(res)
      setPlayers(res)
    }
    fetchPlayers()
  }, [])

  return (
    <>
    <div className="player-card">
        {players.map((player) => {
          if (player.potentials > '95') {
            return (
            <Link to={`/players/${player.id}`} key={player.id}>
              <div className='player-image'>
                <img src={player.img_url}></img>
              </div>
              <div className='player-name'>
                {player.name}
              </div>
            </Link> )
          }
        })}
      </div>
      </>
  )
}
