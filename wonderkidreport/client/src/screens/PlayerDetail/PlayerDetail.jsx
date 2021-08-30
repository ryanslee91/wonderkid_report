import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getOnePlayer } from "../../services/players";

export default function PlayerDetail(props) {
  const [player, setPlayer] = useStaet(null);
  const { currentUser, players } = props;
  const { id } = useParams();

  useEffect(() => {
    const fetchPlayer = async () => {
      const player = await getOnePlayer()
      setPlayer(player)
    }
    fetchPlayer()
  }, [id, players]);

  return (
    <div>
      <img src={player?.img_url}></img>
      <h3>{player?.name}</h3>
      <h5>{player?.position}</h5>
      <h5>{player?.footed}</h5>
      <h5>{player?.height_weight}</h5>
      <h5>{player?.national_team}</h5>
      <h5>{player?.club}</h5>
      <h5>{player?.ratings}</h5>
      <h5>{player?.potentials}</h5>
      <script src={player?.stats_url}></script>
    </div>
  )
}
