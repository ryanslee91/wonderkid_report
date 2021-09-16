import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { addLeagueToPlayer } from '../../services/leagues';
import './PlayerCreate.css'

export default function PlayerCreate(props) {
  const [selectedLeague, setSelectedLeague] = useState("");
  const [player, setPlayer] = useState(null);
  const { id } = useParams();
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
  const { leagues, handleCreate } = props;
  // console.log(leagues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleLeagueChange = (e) => {
    setSelectedLeague(e.target.value);
  }

  return (
    <div className='createPlayer'>
      <form
        className="create-form"
        onSubmit={(e) => {
          e.preventDefault();
          const league = leagues.find(
            (league) => league.name === selectedLeague
          );
          handleCreate(formData, league.id);
      }}>
        <h3>Create a Player</h3>
        <pre>
          <label>
            League:
      {player?.leagues?.map((league) => (
        <p key={league.id}>{league.name}</p>
      ))}
      {/* below is for the league drop down */}
            <select value={selectedLeague} onChange={handleLeagueChange} defaultValue='default'>
          {/* we can set a default value to tell people to select a league*/}
          {/* the "defaultValue" on the <select> tag needs to match the "value" on our default <option> tag */}
          {/* we also add the "disabled" in the <option> to prevent users from selecting it*/}
          <option disabled value='default'>
            -- Select a league --
          </option>
          {/* now we loop over all leagues and return an <option> tag for each */}

          {leagues.map((league) => (
            // we track the league's id as the "value" which will get added to state onChange
            // the league's name goes between the open and close tag which is what the user sees
            <option value={league.name} key={league.id}>{league.name}</option>
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
        
          <button>Submit</button>
          </pre>
      </form>
      
    </div>
  )
}
