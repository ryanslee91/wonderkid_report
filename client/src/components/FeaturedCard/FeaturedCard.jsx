import { useState, useEffect } from 'react';
import { getAllPlayers } from '../../services/players';
import { Link } from 'react-router-dom';
import './FeaturedCard.css'

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
    <div className="featured-card">
        {players.map((player) => {
          if (player.potentials > '95') {
            return (
            <Link id="featLink" to={`/players/${player.id}`} key={player.id}>
              <div className='featured-image'>
                <img id="featImg" src={player.img_url}></img>
              </div>
              <div className='featured-name'>
                <span id="featSpan">{player.name}</span>
              </div>
            </Link> )
          }
        })}
      </div>
      </>
  )
}
