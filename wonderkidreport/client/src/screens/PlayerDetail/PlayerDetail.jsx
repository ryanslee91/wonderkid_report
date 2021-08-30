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
      
    </div>
  )
}
