import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOnePlayer } from "../../services/players";
import './PlayerDetail.css'

export default function PlayerDetail(props) {
  const [player, setPlayer] = useState({});
  const { currentUser, players } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchPlayer = async () => {
      const player = await getOnePlayer(id)
      setPlayer(player)
  
    }
    fetchPlayer()
  }, [id]);

  return (
    <div className='playerDetail'>
      <img src={player?.img_url}></img>
      <h3>Name: {player?.name}</h3>
      <h5>Position: {player?.position}</h5>
      <h5>Footed: {player?.footed}</h5>
      <h5>Height/Weight: {player?.height_weight}</h5>
      <h5>National Team: {player?.national_team}</h5>
      <h5>Club: {player?.club}</h5>
      <h5>Ratings: {player?.ratings}</h5>
      <h5>Potentials: {player?.potentials}</h5>
      <script src={player?.stats_url}></script>
      
 
      {currentUser?.id === player?.user_id && (
   <Link to={`/players/${player?.id}/edit`}>
   Edit Player
        </Link>
     
      )}
   
    </div>
  )
}
