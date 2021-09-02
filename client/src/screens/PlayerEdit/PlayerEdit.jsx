import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { addLeagueToPlayer } from '../../services/leagues';
import './PlayerEdit.css';

export default function PlayerEdit(props) {
  const [selectedLeague, setSelectedLeague] = useState("");
  const [player, setPlayer] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    img_url: '',
    position: '',
    footed: '',
    height_weight: '',
    national_team: '',
    club: '',
    ratings: '',
    potentials: '',
    stats_url: ''
  })
  const { name, img_url, position, footed,
    height_weight, national_team, club,
    ratings, potentials, stats_url } = formData;
  const { players, handleUpdate, handleDelete } = props;
  const { id } = useParams();
  const { leagues } = props;

  useEffect(() => {
    const prefillFormData = () => {
      const player = players.find((player) => player.id === Number(id));
      setFormData({
        name: player.name,
        img_url: player.img_url,
        position: player.position,
        footed: player.footed,
        height_weight: player.height_weight,
        national_team: player.national_team,
        club: player.club,
        ratings: player.ratings,
        potentials: player.potentials,
        stats_url: player.stats_url
      })
    }
    if (players.length) {
      prefillFormData()
    }
  }, [players, id])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleLeagueChange = (e) => {
    const { value } = e.target;
    setSelectedLeague(value)
  }

  const handleLeagueSubmit = async (e) => {
    e.preventDefault();
    const player = await addLeagueToPlayer(id, selectedLeague)
    setPlayer(player);
  }



  return (
    <form id="editForm" onSubmit={(e) => {
      e.preventDefault();
      handleUpdate(id, formData)
    }}>
      <pre>
      <label>
            League:
            {player?.leagues?.map((league) => (
        <p key={league.id}>{league.name}</p>
      ))}
      {/* below is our for for the league drop down */}
        <select onChange={handleLeagueChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a league*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Select a league --
          </option>
          {/* now we loop over all leagues and return an <option> tag for each */}
          {leagues?.map((league) => (
            // we track the league's id as the "value" which will get added to state onChange
            // the league's name goes between the open and close tag which is what the user sees
            <option value={league.name}>{league.name}</option>
          ))}
        </select>
          </label><br />
      <label>
          Name:
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label><br />
        <label>
          Image:
          <input type='url' name='img_url' value={img_url} onChange={handleChange} />
        </label><br />
        <label>
          Position:
        <input type='text' name='position' value={position} onChange={handleChange} />
        </label><br />
        <label>
          Footed:
          <input type='text' name='footed' value={footed} onChange={handleChange} />
        </label><br />
        <label>
          Height/Weight:
          <input type='text' name='height_weight' value={height_weight} onChange={handleChange} />
        </label><br />
        <label>
          National Team:
          <input type='text' name='national_team' value={national_team} onChange={handleChange} />
        </label><br />
        <label>
          Club:
          <input type='text' name='club' value={club} onChange={handleChange} />
        </label><br />
        <label>
          Ratings:
          <input type='number' name='ratings' value={ratings} onChange={handleChange} />
        </label><br />
        <label>
          Potentials:
          <input type='number' name='potentials' value={potentials} onChange={handleChange} />
        </label><br />
        <label>
          Stats:
          <input type='url' name='stats_url' value={stats_url} onChange={handleChange} />
        </label><br />
        <button>Submit</button><br />
        <button onClick={() => handleDelete(id)}>Delete</button>
          </pre>
      </form>
  )
}
